const { bootstrapDatabase, functionMocks } = require('../init');
const fCreateLogNotification = require('../../functions/f_create_log_notification');

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
  ns: {
    db: 'mdm-dev',
    coll: 'log_notifications',
  },
  documentKey: {
    _id: '65006067ef23957fe27faa30',
  },
};

beforeAll(async () => {
  await fCreateLogNotification('reprocess_function', {
    status: 'success',
    _id: '65006067c9de4d65f03a425e',
  });
});

const fnDescription = (action) => {
  it('Deve chamar a Trigger_Process_log_notifications', async () => {
    const triggerProcessLogNotifications = functionMocks.mockBasicFunctions(
      'Trigger_Process_log_notifications',
    );
    const handler = jest.fn(action);
    const result = await handler(dataRequest);

    expect(triggerProcessLogNotifications).toHaveBeenCalledTimes(1);
    expect(result).toBe('OK');
  });
};

// npm test -- ./test/unit/Trigger_Schedule_log_notifications.test.js
bootstrapDatabase('Trigger_Schedule_log_notifications', fnDescription);
