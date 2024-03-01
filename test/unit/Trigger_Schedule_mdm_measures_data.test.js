const { bootstrapDatabase, getDatabase, functionMocks } = require('../init');
const triggerMdmMeasuresLake = require('../../functions/Trigger_mdm_measures_lake');
const httpCreateMeasureDummy = require('../../functions/Http_Create_Measure_Dummy');

const MDM_MEASURES_LAKE = 'mdm_measures_lake';
const CPE_POSITIVO = 'PT0002970034337218PA';

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
  fullDocument: {},
  ns: {
    db: 'mdm-dev',
    coll: 'mdm_measures_data_legacy',
  },
  documentKey: {
    _id: '65006067ef23957fe27faa30',
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

async function criarCenariosMeasureLakeValorPositivo(cpe) {
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

  const query = {
    to: '2023-04-30',
    from: '2023-04-01',
    qt: 1,
    ic: cpe,
    st: 'surplus',
    ut: 'electricity',
    operationSelection: 'positivo',
  };

  await httpCreateMeasureDummy({ query, headers, body }, response);
  await createMeasureData(cpe);
}

beforeAll(async () => {
  // Simula várias de inserções com valores aleatorios
  // e positivos (cada iteração corresponde a um request)
  let i = 0;
  const promises = [];
  while (i < 2) {
    promises.push(criarCenariosMeasureLakeValorPositivo(CPE_POSITIVO));
    i += 1;
  }
  await Promise.all(promises);
}, 15000);

const fnDescription = (action) => {
  it('Schedule measures data', async () => {
    const fGetDatabase = functionMocks.f_get_database();
    // Ação de chamada ao teste
    const handler = jest.fn(action);
    await handler(dataRequest);

    expect(fGetDatabase).toHaveBeenCalled();
  });
};

// npm test -- ./test/unit/Trigger_Schedule_mdm_measures_data.test.js
bootstrapDatabase(
  'Trigger_Schedule_mdm_measures_data',
  fnDescription,
  dataRequest,
);
