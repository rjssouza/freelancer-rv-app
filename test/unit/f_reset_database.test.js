const { bootstrapDatabase, functionMocks } = require('../init');
const fCreateLogNotification = require('../../functions/f_create_log_notification');

const LOG_NOTIFICATIONS = 'log_notifications';
const EXPECTED_RESULT = 'OK';
const QTD_TABELAS_HARD = 17;
const QTD_TABELAS_SOFT = 14;

const body = undefined;
const response = undefined;
const headers = {
  'X-Cluster-Client-Ip': ['94.60.180.79'],
  'User-Agent': ['PostmanRuntime/7.32.1'],
  'Cache-Control': ['no-cache'],
  'X-Request-Id': ['7b4e076c-873e-4f27-8944-a056839bc168'],
  'X-Forwarded-For': ['94.60.180.79'],
  'X-Envoy-External-Address': ['94.60.180.79'],
  'Postman-Token': ['d3ca11ed-005d-41cb-a847-c1f6458ab293'],
  'Accept-Encoding': ['gzip, deflate, br'],
  'X-Forwarded-Client-Cert': [
    'By=spiffe://xgen-prod/ns/baas-prod/sa/baas-main;Hash=c68c5aa61293af7317ce95a81111deb355d7f6acdfabeb775e95a468d14f947a;Subject=',
  ],
  Traceparent: ['00-c51f47649c6be2b995c9e2e81de36bd1-ec38dafa432fc9b5-00'],
  Accept: ['*/*'],
  'X-Forwarded-Proto': ['https'],
};
let query = { mode: 'soft' };

beforeAll(async () => {
  await fCreateLogNotification('create_technical_data', {
    status: 'done',
    _id: '64fa0334e0f62b9279096d15',
  });
});

const fnDescription = (action) => {
  it('Base deverá estar limpa', async () => {
    query = { mode: 'hard' };

    const fGetDatabase = functionMocks.f_get_database();
    const coll = await fGetDatabase(LOG_NOTIFICATIONS);
    const handler = jest.fn(action);
    const result = await handler({ query, headers, body }, response);
    const notificationArray = await coll.find({}).toArray();

    expect(notificationArray.length).toBe(0);
    expect(result).toBe(EXPECTED_RESULT);
    expect(fGetDatabase).toHaveBeenCalledTimes(QTD_TABELAS_HARD);
  });

  it('Base deverá estar limpa (soft)', async () => {
    query = { mode: 'soft' };

    const fGetDatabase = functionMocks.f_get_database();
    const coll = await fGetDatabase(LOG_NOTIFICATIONS);
    const handler = jest.fn(action);
    const result = await handler({ query, headers, body }, response);
    const notificationArray = await coll.find({}).toArray();

    expect(notificationArray.length).toBe(0);
    expect(result).toBe(EXPECTED_RESULT);
    expect(fGetDatabase).toHaveBeenCalledTimes(QTD_TABELAS_SOFT);
  });
};

// npm test -- ./test/unit/f_reset_database.test.js
bootstrapDatabase(
  'f_reset_database',
  fnDescription,
  { query, headers, body },
  response,
);
