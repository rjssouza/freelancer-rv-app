const { bootstrapDatabase, getDatabase } = require('../init');
const triggerMdmMeasuresLake = require('../../functions/Trigger_mdm_measures_lake');
const httpCreateMeasureDummy = require('../../functions/Http_Create_Measure_Dummy');
const triggerScheduleMdmMeasuresData = require('../../functions/Trigger_Schedule_mdm_measures_data');

const REQ_DATA_RESULTS = 'req_data_results_legacy';
const MDM_MEASURES_LAKE = 'mdm_measures_lake';
const LOG_NOTIFICATIONS = 'log_notifications';

const CPE_ZERO = 'PT9905173429066620EX';
const CPE_NEGATIVO = 'PT9905171107350102EX';
const CPE_HORARIO_INVERNO = 'PT9905171104256802EX';
const TIMEOUT = 20000;

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
const body = undefined;
const response = undefined;

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
    _id: '64f6535c2a9246b696f9b24d',
    topic: 'billing_request',
    publish_date: {
      $date: '2023-09-04T21:59:56.000Z',
    },
    content: {
      external_id: 'PT99051734290',
      installation_code: CPE_NEGATIVO,
      service_type: 'surplus',
      granularity: 'daily',
      period_from: '2023-01-01T00:00:00.000Z',
      period_to: '2023-01-31T23:59:59.000Z',
      source_system: 'bc',
    },
  },
  ns: {
    db: 'mdm-dev',
    coll: 'req_data_requests_legacy',
  },
  documentKey: {
    _id: '64f6535c2a9246b696f9b24d',
  },
};

async function createMeasureData(cpe) {
  const collection = await getDatabase(MDM_MEASURES_LAKE);
  const results = await collection.find({ installation_code: cpe }).toArray();
  const promises = results.map(async (measureLake) => triggerMdmMeasuresLake(
    {
      fullDocument: measureLake
    }
  ));

  await Promise.all(promises);
}

async function criarCenariosMeasureLakeHorarioInverno(cpe) {
  const query = {
    to: '2023-01-31',
    from: '2023-01-01',
    qt: 1,
    ic: cpe,
    st: 'surplus',
    ut: 'electricity',
    operationSelection: 'time',
  };

  await httpCreateMeasureDummy({ query, headers, body }, response);
  await createMeasureData(cpe);
}

async function criarCenariosMeasureLakeValorZero(cpe) {
  const query = {
    to: '2023-01-31',
    from: '2023-01-01',
    qt: 1,
    ic: cpe,
    st: 'surplus',
    ut: 'electricity',
    operationSelection: 'zero',
  };

  await httpCreateMeasureDummy({ query, headers, body }, response);
  await createMeasureData(cpe);
}

async function criarCenariosMeasureLakeValorNegativo(cpe) {
  const query = {
    to: '2023-01-31',
    from: '2023-01-01',
    qt: 1,
    ic: cpe,
    st: 'surplus',
    ut: 'electricity',
    operationSelection: 'negativo',
  };

  await httpCreateMeasureDummy({ query, headers, body }, response);
  await createMeasureData(cpe);
}

async function getDataResult(cpe, granularity = 'daily') {
  const collection = await getDatabase(REQ_DATA_RESULTS);
  const result = await collection.findOne({
    installation_code: cpe,
    granularity,
  });

  return result;
}

async function getLog(cpe) {
  const collection = await getDatabase(LOG_NOTIFICATIONS);
  const result = await collection.findOne({
    'content.installation_code': cpe,
    topic: 'billing_request',
  });

  return result;
}

beforeAll(async () => {
  await criarCenariosMeasureLakeValorZero(CPE_ZERO);
  await criarCenariosMeasureLakeValorNegativo(CPE_NEGATIVO);
  await criarCenariosMeasureLakeHorarioInverno(CPE_HORARIO_INVERNO);
  await triggerScheduleMdmMeasuresData();
}, TIMEOUT);

const fnDescription = (action) => {
  it(
    'Validar data result valor a zero granularidade daily',
    async () => {
      dataRequest.fullDocument.content.installation_code = CPE_ZERO;
      const handler = jest.fn(action);
      await handler(dataRequest);
      const dataResult = await getDataResult(CPE_ZERO);
      const log = await getLog(CPE_ZERO);

      expect(dataResult.total_value).toBe(0);
      expect(dataResult.count_value).toBe(31);
      expect(dataResult.total_duration_in_seconds).toBe(2678400);
      expect(
        dataResult.meters_installations[0].measures[1].period_from,
      ).not.toBeNull();

      expect(log.topic).toBe('billing_request');
      expect(log.content.status).toBe('success');
    },
    TIMEOUT,
  );

  it(
    'Validar data result valor a zero granularidade hour',
    async () => {
      dataRequest.fullDocument.content.installation_code = CPE_ZERO;
      dataRequest.fullDocument.content.granularity = 'hour';
      const handler = jest.fn(action);
      await handler(dataRequest);
      const dataResult = await getDataResult(CPE_ZERO, 'hour');
      const log = await getLog(CPE_ZERO);

      expect(dataResult.total_value).toBe(0);
      expect(dataResult.count_value).toBe(744);
      expect(dataResult.total_duration_in_seconds).toBe(2678400);
      expect(
        dataResult.meters_installations[0].measures[1].period_from,
      ).not.toBeNull();

      expect(log.topic).toBe('billing_request');
      expect(log.content.status).toBe('success');
    },
    TIMEOUT,
  );

  it(
    'Validar data result valor a zero granularidade de quarter-hour',
    async () => {
      dataRequest.fullDocument.content.installation_code = CPE_ZERO;
      dataRequest.fullDocument.content.granularity = 'quarter-hour';
      const handler = jest.fn(action);
      await handler(dataRequest);
      const dataResult = await getDataResult(CPE_ZERO, 'quarter-hour');
      const log = await getLog(CPE_ZERO);

      expect(dataResult.total_value).toBe(0);
      expect(dataResult.count_value).toBe(2976);
      expect(dataResult.total_duration_in_seconds).toBe(2678400);
      expect(
        dataResult.meters_installations[0].measures[1].period_from,
      ).not.toBeNull();

      expect(log.topic).toBe('billing_request');
      expect(log.content.status).toBe('success');
    },
    TIMEOUT,
  );

  it(
    'Validar data result valor negativo',
    async () => {
      dataRequest.fullDocument.content.installation_code = CPE_NEGATIVO;
      dataRequest.fullDocument.content.granularity = 'daily';
      const handler = jest.fn(action);
      await handler(dataRequest);
      const dataResult = await getDataResult(CPE_NEGATIVO);
      const log = await getLog(CPE_NEGATIVO);

      expect(dataResult.total_value).toBeLessThan(0);
      expect(dataResult.count_value).toBe(31);
      expect(dataResult.total_duration_in_seconds).toBe(2678400);
      expect(
        dataResult.meters_installations[0].measures[1].period_from,
      ).not.toBeNull();

      expect(log.topic).toBe('billing_request');
      expect(log.content.status).toBe('success');
    },
    TIMEOUT,
  );

  it(
    'Validar horário de inverno',
    async () => {
      dataRequest.fullDocument.content.installation_code = CPE_HORARIO_INVERNO;
      dataRequest.fullDocument.content.granularity = 'hour';
      dataRequest.fullDocument.content.period_from = '2023-01-06T00:00:00.000Z';
      dataRequest.fullDocument.content.period_to = '2023-01-06T23:59:59.000Z';

      const handler = jest.fn(action);
      await handler(dataRequest);
      const dataResult = await getDataResult(CPE_HORARIO_INVERNO, 'hour');
      const log = await getLog(CPE_HORARIO_INVERNO);
      expect(dataResult.total_value).not.toBeLessThan(0);
      expect(dataResult.count_value).toBe(25);
      expect(dataResult.total_duration_in_seconds).toBe(90000);
      expect(log.topic).toBe('billing_request');
      expect(log.content.status).toBe('success');
      expect(
        dataResult.meters_installations[0].measures[7].adjustment_type,
      ).toBe('daylight_saving_time');
      expect(
        dataResult.meters_installations[0].measures[7].period_from.toISOString(),
      ).toBe('2023-01-06T06:00:00.000Z');
      expect(
        dataResult.meters_installations[0].measures[7].period_to.toISOString(),
      ).toBe('2023-01-06T06:59:59.000Z');
    },
    TIMEOUT,
  );
};

// npm test -- ./test/unit/Trigger_Process_req_data_requests.test.js
bootstrapDatabase(
  'Trigger_Process_req_data_requests',
  fnDescription,
  dataRequest,
);
