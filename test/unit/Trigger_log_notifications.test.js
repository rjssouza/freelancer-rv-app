const { bootstrapDatabase, getDatabase } = require('../init');
const fCreateLogNotification = require('../../functions/f_create_log_notification');

const LOG_NOTIFICATIONS = 'log_notifications';

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
    _id: '65006067ef23957fe27faa30',
    topic: 'create_technical_data',
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

beforeAll(async () => {
  const result = await fCreateLogNotification('create_technical_data', {
    status: 'success',
    _id: '65006067c9de4d65f03a425e',
  });
  dataRequest.fullDocument._id = result.insertedId.toString();
});

const fnDescription = (action) => {
  it('Deve registrar a log notification', async () => {
    const handler = jest.fn(action);
    await handler(dataRequest);
    const coll = await getDatabase(LOG_NOTIFICATIONS);
    const result = await coll.findOne({});

    expect(result.created_at).toBeDefined();
    expect(result.status).toBeDefined();
    expect(result._id.toString()).toBe(dataRequest.fullDocument._id);
  });
};

// npm test -- ./test/unit/Trigger_log_notifications.test.js
bootstrapDatabase('Trigger_log_notifications', fnDescription, dataRequest);
