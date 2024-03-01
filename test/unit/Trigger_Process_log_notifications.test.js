const { bootstrapDatabase, getDatabase } = require('../init');
const fCreateLogNotification = require('../../functions/f_create_log_notification');

const LOG_NOTIFICATIONS = 'log_notifications';
const EXPECTED_HTML_ERROR_STATUS = 'html_error';
const EXPECTED_HTML_ERROR_MESSAGE = 'Ocorreu uma falha ao comunicar com OUTSYSTEMS';

const dataRequest = {
  _id: {
    _data:
      '8265006067000000012B022C0100296E5A10045EB498A951764075AE4EDC3531151F4546645F6964006465006067EF23957FE27FAA300004',
  },
  operationType: 'insert',
  clusterTime: {
    $timestamp: {
      t: 1694523495,
      i: 1,
    },
  },
  wallTime: '2023-09-12T12:58:15.514Z',
  fullDocument: {
    topic: 'bill_pre_bill',
    content: {
      status: 'success',
      _id: '65006067c9de4d65f03a425e',
    },
  },
  ns: {
    db: 'mdm-dev',
    coll: 'log_notifications',
  },
  documentKey: {
    _id: '65006067ef23957fe27faa30',
  },
};

async function getLogNotification() {
  const coll = await getDatabase(LOG_NOTIFICATIONS);
  const logNotification = await coll.findOne({});
  return logNotification;
}

beforeAll(async () => {
  await fCreateLogNotification('create_technical_data', {
    status: 'success',
    _id: '65006067c9de4d65f03a425e',
  });

  dataRequest.fullDocument = await getLogNotification();
});

const fnDescription = (action) => {
  it('Processar log notification erro http', async () => {
    const httpMock = jest.fn(() => ({ statusCode: 400 }));
    global.context.http.post = httpMock;
    const handler = jest.fn(action);

    await expect(handler(dataRequest)).rejects.toThrow(
      EXPECTED_HTML_ERROR_MESSAGE,
    );
    expect(httpMock).toHaveBeenCalled();
    const logNotification = await getLogNotification();
    expect(logNotification.status).toBe(EXPECTED_HTML_ERROR_STATUS);
  });

  it('Processar log notification', async () => {
    const httpMock = jest.fn(() => ({ statusCode: 200 }));
    global.context.http.post = httpMock;
    const handler = jest.fn(action);
    await handler(dataRequest);
    const logNotification = await getLogNotification();
    expect(logNotification.status).toBe('done');
    expect(httpMock).toHaveBeenCalled();
  });
};

// npm test -- ./test/unit/Trigger_Process_log_notifications.test.js
bootstrapDatabase(
  'Trigger_Process_log_notifications',
  fnDescription,
  dataRequest,
);
