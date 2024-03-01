const { bootstrapDatabase, getDatabase } = require('../init');

const REQ_DATA_RESULTS = 'req_data_results_legacy';

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
const query = { installation_code: 'PT9905029844968032EI' };
const body = undefined;
const response = undefined;

beforeAll(async () => {
  const collection = await getDatabase(REQ_DATA_RESULTS);
  await collection.insertOne(
    {
      installation_info: {
        service_type: 'surplus',
        utility_type: 'electricity',
      },
      total_value: 31717.951,
      total_duration_in_seconds: 0,
      count_value: 613,
      meters_installations: [
        {
          _id: {
            $oid: '64f743d05a81586f3391e286',
          },
          measures: [
            {
              timestamp: {
                $date: '2022-01-01T00:00:00.000Z',
              },
              value: 52.7128,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-01-02T00:00:00.000Z',
              },
              value: 44.8716,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-01-03T00:00:00.000Z',
              },
              value: 53.7014,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-01-04T00:00:00.000Z',
              },
              value: 61.8528,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-01-05T00:00:00.000Z',
              },
              value: 53.053,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-01-06T00:00:00.000Z',
              },
              value: 55.2668,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-01-07T00:00:00.000Z',
              },
              value: 57.1032,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-01-08T00:00:00.000Z',
              },
              value: 53.0571,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-01-09T00:00:00.000Z',
              },
              value: 45.8126,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-01-10T00:00:00.000Z',
              },
              value: 55.0264,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-01-11T00:00:00.000Z',
              },
              value: 60.0809,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-01-12T00:00:00.000Z',
              },
              value: 54.5148,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-01-13T00:00:00.000Z',
              },
              value: 49.3451,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-01-14T00:00:00.000Z',
              },
              value: 46.873,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-01-15T00:00:00.000Z',
              },
              value: 49.5725,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-01-16T00:00:00.000Z',
              },
              value: 59.298899999999996,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-01-17T00:00:00.000Z',
              },
              value: 54.4155,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-01-18T00:00:00.000Z',
              },
              value: 52.3892,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-01-19T00:00:00.000Z',
              },
              value: 62.5049,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-01-20T00:00:00.000Z',
              },
              value: 49.7433,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-01-21T00:00:00.000Z',
              },
              value: 56.7236,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-01-22T00:00:00.000Z',
              },
              value: 51.0643,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-01-23T00:00:00.000Z',
              },
              value: 43.4173,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-01-24T00:00:00.000Z',
              },
              value: 50.6141,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-01-25T00:00:00.000Z',
              },
              value: 54.5624,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-01-26T00:00:00.000Z',
              },
              value: 52.4903,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-01-27T00:00:00.000Z',
              },
              value: 46.645,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-01-28T00:00:00.000Z',
              },
              value: 54.9178,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-01-29T00:00:00.000Z',
              },
              value: 58.0812,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-01-30T00:00:00.000Z',
              },
              value: 50.3478,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-01-31T00:00:00.000Z',
              },
              value: 50.5958,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-02-01T00:00:00.000Z',
              },
              value: 50.9724,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-02-02T00:00:00.000Z',
              },
              value: 51.5659,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-02-03T00:00:00.000Z',
              },
              value: 44.8224,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-02-04T00:00:00.000Z',
              },
              value: 54.2472,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-02-05T00:00:00.000Z',
              },
              value: 54.8754,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-02-06T00:00:00.000Z',
              },
              value: 48.683,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-02-07T00:00:00.000Z',
              },
              value: 60.6407,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-02-08T00:00:00.000Z',
              },
              value: 55.0786,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-02-09T00:00:00.000Z',
              },
              value: 55.5054,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-02-10T00:00:00.000Z',
              },
              value: 54.7952,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-02-11T00:00:00.000Z',
              },
              value: 48.6349,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-02-12T00:00:00.000Z',
              },
              value: 45.6894,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-02-13T00:00:00.000Z',
              },
              value: 57.9937,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-02-14T00:00:00.000Z',
              },
              value: 44.1528,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-02-15T00:00:00.000Z',
              },
              value: 47.686,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-02-16T00:00:00.000Z',
              },
              value: 45.3764,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-02-17T00:00:00.000Z',
              },
              value: 51.1398,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-02-18T00:00:00.000Z',
              },
              value: 52.838,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-02-19T00:00:00.000Z',
              },
              value: 55.2037,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-02-20T00:00:00.000Z',
              },
              value: 53.0777,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-02-21T00:00:00.000Z',
              },
              value: 51.7443,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-02-22T00:00:00.000Z',
              },
              value: 53.3092,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-02-23T00:00:00.000Z',
              },
              value: 54.4873,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-02-24T00:00:00.000Z',
              },
              value: 54.2873,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-02-25T00:00:00.000Z',
              },
              value: 60.9643,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-02-26T00:00:00.000Z',
              },
              value: 43.3757,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-02-27T00:00:00.000Z',
              },
              value: 44.961,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-02-28T00:00:00.000Z',
              },
              value: 53.4571,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-03-01T00:00:00.000Z',
              },
              value: 58.656800000000004,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-03-02T00:00:00.000Z',
              },
              value: 50.2845,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-03-03T00:00:00.000Z',
              },
              value: 56.5474,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-03-04T00:00:00.000Z',
              },
              value: 52.2608,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-03-05T00:00:00.000Z',
              },
              value: 50.7113,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-03-06T00:00:00.000Z',
              },
              value: 50.2398,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-03-07T00:00:00.000Z',
              },
              value: 61.9542,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-03-08T00:00:00.000Z',
              },
              value: 50.577,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-03-09T00:00:00.000Z',
              },
              value: 50.6153,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-03-10T00:00:00.000Z',
              },
              value: 46.025800000000004,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-03-11T00:00:00.000Z',
              },
              value: 57.4799,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-03-12T00:00:00.000Z',
              },
              value: 49.8437,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-03-13T00:00:00.000Z',
              },
              value: 50.0631,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-03-14T00:00:00.000Z',
              },
              value: 46.9137,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-03-15T00:00:00.000Z',
              },
              value: 49.475,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-03-16T00:00:00.000Z',
              },
              value: 41.8449,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-03-17T00:00:00.000Z',
              },
              value: 46.1178,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-03-18T00:00:00.000Z',
              },
              value: 43.7542,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-03-19T00:00:00.000Z',
              },
              value: 48.7648,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-03-20T00:00:00.000Z',
              },
              value: 47.8745,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-03-21T00:00:00.000Z',
              },
              value: 47.0472,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-03-22T00:00:00.000Z',
              },
              value: 51.7812,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-03-23T00:00:00.000Z',
              },
              value: 51.7831,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-03-24T00:00:00.000Z',
              },
              value: 47.5939,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-03-25T00:00:00.000Z',
              },
              value: 57.6422,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-03-26T00:00:00.000Z',
              },
              value: 45.6113,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-03-27T00:00:00.000Z',
              },
              value: 54.7977,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-03-28T00:00:00.000Z',
              },
              value: 45.2571,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-03-29T00:00:00.000Z',
              },
              value: 55.9791,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-03-30T00:00:00.000Z',
              },
              value: 55.2765,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-03-31T00:00:00.000Z',
              },
              value: 52.769800000000004,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-04-01T00:00:00.000Z',
              },
              value: 45.7731,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-04-02T00:00:00.000Z',
              },
              value: 45.9225,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-04-03T00:00:00.000Z',
              },
              value: 49.5058,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-04-04T00:00:00.000Z',
              },
              value: 46.8825,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-04-05T00:00:00.000Z',
              },
              value: 52.9122,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-04-06T00:00:00.000Z',
              },
              value: 54.3974,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-04-07T00:00:00.000Z',
              },
              value: 58.9377,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-04-08T00:00:00.000Z',
              },
              value: 51.068599999999996,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-04-09T00:00:00.000Z',
              },
              value: 50.5105,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-04-10T00:00:00.000Z',
              },
              value: 57.0887,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-04-11T00:00:00.000Z',
              },
              value: 51.1882,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-04-12T00:00:00.000Z',
              },
              value: 46.3723,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-04-13T00:00:00.000Z',
              },
              value: 59.6195,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-04-14T00:00:00.000Z',
              },
              value: 52.0589,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-04-15T00:00:00.000Z',
              },
              value: 50.3063,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-04-16T00:00:00.000Z',
              },
              value: 50.8514,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-04-17T00:00:00.000Z',
              },
              value: 57.5834,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-04-18T00:00:00.000Z',
              },
              value: 54.1637,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-04-19T00:00:00.000Z',
              },
              value: 53.446600000000004,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-04-20T00:00:00.000Z',
              },
              value: 46.6209,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-04-21T00:00:00.000Z',
              },
              value: 56.9578,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-04-22T00:00:00.000Z',
              },
              value: 52.8604,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-04-23T00:00:00.000Z',
              },
              value: 49.5279,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-04-24T00:00:00.000Z',
              },
              value: 53.7529,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-04-25T00:00:00.000Z',
              },
              value: 53.734899999999996,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-04-26T00:00:00.000Z',
              },
              value: 50.839999999999996,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-04-27T00:00:00.000Z',
              },
              value: 56.998,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-04-28T00:00:00.000Z',
              },
              value: 52.2096,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-04-29T00:00:00.000Z',
              },
              value: 54.1226,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-04-30T00:00:00.000Z',
              },
              value: 42.7185,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-05-01T00:00:00.000Z',
              },
              value: 52.1462,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-05-02T00:00:00.000Z',
              },
              value: 40.8451,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-05-03T00:00:00.000Z',
              },
              value: 47.6716,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-05-04T00:00:00.000Z',
              },
              value: 51.5717,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-05-05T00:00:00.000Z',
              },
              value: 47.0854,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-05-06T00:00:00.000Z',
              },
              value: 49.3173,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-05-07T00:00:00.000Z',
              },
              value: 49.968,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-05-08T00:00:00.000Z',
              },
              value: 64.3267,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-05-09T00:00:00.000Z',
              },
              value: 57.4145,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-05-10T00:00:00.000Z',
              },
              value: 64.6073,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-05-11T00:00:00.000Z',
              },
              value: 53.1606,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-05-12T00:00:00.000Z',
              },
              value: 50.6949,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-05-13T00:00:00.000Z',
              },
              value: 51.1686,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-05-14T00:00:00.000Z',
              },
              value: 56.138,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-05-15T00:00:00.000Z',
              },
              value: 51.5099,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-05-16T00:00:00.000Z',
              },
              value: 45.7911,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-05-17T00:00:00.000Z',
              },
              value: 55.0708,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-05-18T00:00:00.000Z',
              },
              value: 59.37,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-05-19T00:00:00.000Z',
              },
              value: 52.0095,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-05-20T00:00:00.000Z',
              },
              value: 55.219,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-05-21T00:00:00.000Z',
              },
              value: 58.272,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-05-22T00:00:00.000Z',
              },
              value: 52.9421,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-05-23T00:00:00.000Z',
              },
              value: 49.4187,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-05-24T00:00:00.000Z',
              },
              value: 48.1924,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-05-25T00:00:00.000Z',
              },
              value: 49.8654,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-05-26T00:00:00.000Z',
              },
              value: 51.3961,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-05-27T00:00:00.000Z',
              },
              value: 47.5144,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-05-28T00:00:00.000Z',
              },
              value: 55.4444,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-05-29T00:00:00.000Z',
              },
              value: 55.0434,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-05-30T00:00:00.000Z',
              },
              value: 55.4055,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-05-31T00:00:00.000Z',
              },
              value: 51.1922,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-06-01T00:00:00.000Z',
              },
              value: 45.7058,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-06-02T00:00:00.000Z',
              },
              value: 56.258900000000004,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-06-03T00:00:00.000Z',
              },
              value: 47.7361,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-06-04T00:00:00.000Z',
              },
              value: 53.019,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-06-05T00:00:00.000Z',
              },
              value: 48.1956,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-06-06T00:00:00.000Z',
              },
              value: 56.684599999999996,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-06-07T00:00:00.000Z',
              },
              value: 49.2323,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-06-08T00:00:00.000Z',
              },
              value: 55.122,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-06-09T00:00:00.000Z',
              },
              value: 49.8004,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-06-10T00:00:00.000Z',
              },
              value: 51.5896,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-06-11T00:00:00.000Z',
              },
              value: 48.7599,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-06-12T00:00:00.000Z',
              },
              value: 57.6051,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-06-13T00:00:00.000Z',
              },
              value: 54.7948,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-06-14T00:00:00.000Z',
              },
              value: 48.7702,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-06-15T00:00:00.000Z',
              },
              value: 53.1006,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-06-16T00:00:00.000Z',
              },
              value: 56.3685,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-06-17T00:00:00.000Z',
              },
              value: 55.9199,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-06-18T00:00:00.000Z',
              },
              value: 58.0012,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-06-19T00:00:00.000Z',
              },
              value: 54.7508,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-06-20T00:00:00.000Z',
              },
              value: 54.9362,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-06-21T00:00:00.000Z',
              },
              value: 49.7078,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-06-22T00:00:00.000Z',
              },
              value: 45.8424,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-06-23T00:00:00.000Z',
              },
              value: 49.4938,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-06-24T00:00:00.000Z',
              },
              value: 56.048,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-06-25T00:00:00.000Z',
              },
              value: 49.4565,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-06-26T00:00:00.000Z',
              },
              value: 50.0124,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-06-27T00:00:00.000Z',
              },
              value: 57.2656,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-06-28T00:00:00.000Z',
              },
              value: 56.3379,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-06-29T00:00:00.000Z',
              },
              value: 51.2176,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-06-30T00:00:00.000Z',
              },
              value: 39.1372,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-07-01T00:00:00.000Z',
              },
              value: 49.7351,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-07-02T00:00:00.000Z',
              },
              value: 54.3427,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-07-03T00:00:00.000Z',
              },
              value: 50.7572,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-07-04T00:00:00.000Z',
              },
              value: 54.6601,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-07-05T00:00:00.000Z',
              },
              value: 56.3791,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-07-06T00:00:00.000Z',
              },
              value: 52.8303,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-07-07T00:00:00.000Z',
              },
              value: 52.8223,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-07-08T00:00:00.000Z',
              },
              value: 57.7593,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-07-09T00:00:00.000Z',
              },
              value: 53.1235,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-07-10T00:00:00.000Z',
              },
              value: 46.1969,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-07-11T00:00:00.000Z',
              },
              value: 53.0902,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-07-12T00:00:00.000Z',
              },
              value: 46.7021,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-07-13T00:00:00.000Z',
              },
              value: 59.8381,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-07-14T00:00:00.000Z',
              },
              value: 52.1716,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-07-15T00:00:00.000Z',
              },
              value: 44.0632,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-07-16T00:00:00.000Z',
              },
              value: 53.2956,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-07-17T00:00:00.000Z',
              },
              value: 48.6272,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-07-18T00:00:00.000Z',
              },
              value: 50.5216,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-07-19T00:00:00.000Z',
              },
              value: 51.8763,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-07-20T00:00:00.000Z',
              },
              value: 64.8287,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-07-21T00:00:00.000Z',
              },
              value: 51.6504,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-07-22T00:00:00.000Z',
              },
              value: 52.3917,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-07-23T00:00:00.000Z',
              },
              value: 48.0164,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-07-24T00:00:00.000Z',
              },
              value: 49.2301,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-07-25T00:00:00.000Z',
              },
              value: 52.2007,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-07-26T00:00:00.000Z',
              },
              value: 53.2755,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-07-27T00:00:00.000Z',
              },
              value: 45.3736,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-07-28T00:00:00.000Z',
              },
              value: 51.8136,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-07-29T00:00:00.000Z',
              },
              value: 56.5321,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-07-30T00:00:00.000Z',
              },
              value: 52.5023,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-07-31T00:00:00.000Z',
              },
              value: 49.6578,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-08-01T00:00:00.000Z',
              },
              value: 48.78,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-08-02T00:00:00.000Z',
              },
              value: 49.4719,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-08-03T00:00:00.000Z',
              },
              value: 50.3273,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-08-04T00:00:00.000Z',
              },
              value: 52.9476,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-08-05T00:00:00.000Z',
              },
              value: 53.0068,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-08-06T00:00:00.000Z',
              },
              value: 48.7533,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-08-07T00:00:00.000Z',
              },
              value: 54.37,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-08-08T00:00:00.000Z',
              },
              value: 54.8671,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-08-09T00:00:00.000Z',
              },
              value: 43.8436,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-08-10T00:00:00.000Z',
              },
              value: 53.7637,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-08-11T00:00:00.000Z',
              },
              value: 53.8404,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-08-12T00:00:00.000Z',
              },
              value: 49.3987,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-08-13T00:00:00.000Z',
              },
              value: 54.0085,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-08-14T00:00:00.000Z',
              },
              value: 48.2932,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-08-15T00:00:00.000Z',
              },
              value: 45.1331,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-08-16T00:00:00.000Z',
              },
              value: 50.4807,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-08-17T00:00:00.000Z',
              },
              value: 55.6268,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-08-18T00:00:00.000Z',
              },
              value: 52.7791,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-08-19T00:00:00.000Z',
              },
              value: 50.5326,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-08-20T00:00:00.000Z',
              },
              value: 55.0985,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-08-21T00:00:00.000Z',
              },
              value: 57.7341,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-08-22T00:00:00.000Z',
              },
              value: 58.1238,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-08-23T00:00:00.000Z',
              },
              value: 44.8844,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-08-24T00:00:00.000Z',
              },
              value: 50.6644,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-08-25T00:00:00.000Z',
              },
              value: 49.115,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-08-26T00:00:00.000Z',
              },
              value: 51.9825,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-08-27T00:00:00.000Z',
              },
              value: 50.2413,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-08-28T00:00:00.000Z',
              },
              value: 54.5332,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-08-29T00:00:00.000Z',
              },
              value: 45.9705,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-08-30T00:00:00.000Z',
              },
              value: 54.2764,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-08-31T00:00:00.000Z',
              },
              value: 48.9908,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-09-01T00:00:00.000Z',
              },
              value: 52.2549,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-09-02T00:00:00.000Z',
              },
              value: 53.667,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-09-03T00:00:00.000Z',
              },
              value: 57.679500000000004,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-09-04T00:00:00.000Z',
              },
              value: 46.6374,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-09-05T00:00:00.000Z',
              },
              value: 49.2939,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-09-06T00:00:00.000Z',
              },
              value: 45.1607,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-09-07T00:00:00.000Z',
              },
              value: 47.9379,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-09-08T00:00:00.000Z',
              },
              value: 59.4513,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-09-09T00:00:00.000Z',
              },
              value: 49.0712,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-09-10T00:00:00.000Z',
              },
              value: 49.8242,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-09-11T00:00:00.000Z',
              },
              value: 52.6351,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-09-12T00:00:00.000Z',
              },
              value: 55.4381,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-09-13T00:00:00.000Z',
              },
              value: 55.8708,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-09-14T00:00:00.000Z',
              },
              value: 51.8131,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-09-15T00:00:00.000Z',
              },
              value: 59.136,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-09-16T00:00:00.000Z',
              },
              value: 51.1275,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-09-17T00:00:00.000Z',
              },
              value: 43.0754,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-09-18T00:00:00.000Z',
              },
              value: 58.234,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-09-19T00:00:00.000Z',
              },
              value: 53.8349,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-09-20T00:00:00.000Z',
              },
              value: 48.088,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-09-21T00:00:00.000Z',
              },
              value: 50.486,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-09-22T00:00:00.000Z',
              },
              value: 46.843199999999996,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-09-23T00:00:00.000Z',
              },
              value: 52.3016,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-09-24T00:00:00.000Z',
              },
              value: 48.111200000000004,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-09-25T00:00:00.000Z',
              },
              value: 48.9076,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-09-26T00:00:00.000Z',
              },
              value: 45.4307,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-09-27T00:00:00.000Z',
              },
              value: 55.6058,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-09-28T00:00:00.000Z',
              },
              value: 52.3628,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-09-29T00:00:00.000Z',
              },
              value: 43.9966,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-09-30T00:00:00.000Z',
              },
              value: 53.1298,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-10-01T00:00:00.000Z',
              },
              value: 51.7432,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-10-02T00:00:00.000Z',
              },
              value: 49.8434,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-10-03T00:00:00.000Z',
              },
              value: 57.2584,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-10-04T00:00:00.000Z',
              },
              value: 53.7334,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-10-05T00:00:00.000Z',
              },
              value: 45.4606,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-10-06T00:00:00.000Z',
              },
              value: 48.8011,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-10-07T00:00:00.000Z',
              },
              value: 49.9392,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-10-08T00:00:00.000Z',
              },
              value: 57.487,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-10-09T00:00:00.000Z',
              },
              value: 50.431,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-10-10T00:00:00.000Z',
              },
              value: 50.0736,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-10-11T00:00:00.000Z',
              },
              value: 64.572,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-10-12T00:00:00.000Z',
              },
              value: 48.2557,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-10-13T00:00:00.000Z',
              },
              value: 54.8025,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-10-14T00:00:00.000Z',
              },
              value: 51.7842,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-10-15T00:00:00.000Z',
              },
              value: 52.595,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-10-16T00:00:00.000Z',
              },
              value: 45.4647,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-10-17T00:00:00.000Z',
              },
              value: 51.5967,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-10-18T00:00:00.000Z',
              },
              value: 49.1171,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-10-19T00:00:00.000Z',
              },
              value: 50.541199999999996,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-10-20T00:00:00.000Z',
              },
              value: 43.647,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-10-21T00:00:00.000Z',
              },
              value: 49.5597,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-10-22T00:00:00.000Z',
              },
              value: 49.273,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-10-23T00:00:00.000Z',
              },
              value: 46.9151,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-10-24T00:00:00.000Z',
              },
              value: 56.1969,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-10-25T00:00:00.000Z',
              },
              value: 48.8096,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-10-26T00:00:00.000Z',
              },
              value: 47.8438,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-10-27T00:00:00.000Z',
              },
              value: 49.635600000000004,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-10-28T00:00:00.000Z',
              },
              value: 58.978,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-10-29T00:00:00.000Z',
              },
              value: 57.3815,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-10-30T00:00:00.000Z',
              },
              value: 52.817,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-10-31T00:00:00.000Z',
              },
              value: 52.0882,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-11-01T00:00:00.000Z',
              },
              value: 49.5713,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-11-02T00:00:00.000Z',
              },
              value: 48.7647,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-11-03T00:00:00.000Z',
              },
              value: 57.7176,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-11-04T00:00:00.000Z',
              },
              value: 51.7032,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-11-05T00:00:00.000Z',
              },
              value: 53.3112,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-11-06T00:00:00.000Z',
              },
              value: 54.0289,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-11-07T00:00:00.000Z',
              },
              value: 49.1798,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-11-08T00:00:00.000Z',
              },
              value: 53.009,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-11-09T00:00:00.000Z',
              },
              value: 47.7297,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-11-10T00:00:00.000Z',
              },
              value: 51.195299999999996,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-11-11T00:00:00.000Z',
              },
              value: 53.1444,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-11-12T00:00:00.000Z',
              },
              value: 54.7262,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-11-13T00:00:00.000Z',
              },
              value: 51.7266,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-11-14T00:00:00.000Z',
              },
              value: 51.1109,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-11-15T00:00:00.000Z',
              },
              value: 51.656,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-11-16T00:00:00.000Z',
              },
              value: 49.8726,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-11-17T00:00:00.000Z',
              },
              value: 56.2512,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-11-18T00:00:00.000Z',
              },
              value: 50.4787,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-11-19T00:00:00.000Z',
              },
              value: 53.0141,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-11-20T00:00:00.000Z',
              },
              value: 54.7407,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-11-21T00:00:00.000Z',
              },
              value: 56.7579,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-11-22T00:00:00.000Z',
              },
              value: 46.7825,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-11-23T00:00:00.000Z',
              },
              value: 45.7716,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-11-24T00:00:00.000Z',
              },
              value: 48.7209,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-11-25T00:00:00.000Z',
              },
              value: 47.7903,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-11-26T00:00:00.000Z',
              },
              value: 55.0768,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-11-27T00:00:00.000Z',
              },
              value: 50.3142,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-11-28T00:00:00.000Z',
              },
              value: 53.893299999999996,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-11-29T00:00:00.000Z',
              },
              value: 49.9365,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-11-30T00:00:00.000Z',
              },
              value: 54.3287,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-12-01T00:00:00.000Z',
              },
              value: 43.7027,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-12-02T00:00:00.000Z',
              },
              value: 47.8066,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-12-03T00:00:00.000Z',
              },
              value: 48.7444,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-12-04T00:00:00.000Z',
              },
              value: 52.6932,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-12-05T00:00:00.000Z',
              },
              value: 54.575,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-12-06T00:00:00.000Z',
              },
              value: 47.5127,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-12-07T00:00:00.000Z',
              },
              value: 52.9803,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-12-08T00:00:00.000Z',
              },
              value: 49.9274,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-12-09T00:00:00.000Z',
              },
              value: 52.2617,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-12-10T00:00:00.000Z',
              },
              value: 46.4521,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-12-11T00:00:00.000Z',
              },
              value: 53.2742,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-12-12T00:00:00.000Z',
              },
              value: 54.1341,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-12-13T00:00:00.000Z',
              },
              value: 52.5024,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-12-14T00:00:00.000Z',
              },
              value: 50.8575,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-12-15T00:00:00.000Z',
              },
              value: 47.7158,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-12-16T00:00:00.000Z',
              },
              value: 52.377,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-12-17T00:00:00.000Z',
              },
              value: 53.457,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-12-18T00:00:00.000Z',
              },
              value: 53.0765,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-12-19T00:00:00.000Z',
              },
              value: 52.1675,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-12-20T00:00:00.000Z',
              },
              value: 49.989,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-12-21T00:00:00.000Z',
              },
              value: 50.1414,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-12-22T00:00:00.000Z',
              },
              value: 45.8916,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-12-23T00:00:00.000Z',
              },
              value: 49.4858,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-12-24T00:00:00.000Z',
              },
              value: 52.3632,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-12-25T00:00:00.000Z',
              },
              value: 53.7296,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-12-26T00:00:00.000Z',
              },
              value: 52.6309,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-12-27T00:00:00.000Z',
              },
              value: 54.990899999999996,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-12-28T00:00:00.000Z',
              },
              value: 50.838,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-12-29T00:00:00.000Z',
              },
              value: 47.5417,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-12-30T00:00:00.000Z',
              },
              value: 59.2143,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2022-12-31T00:00:00.000Z',
              },
              value: 55.3255,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-01-01T00:00:00.000Z',
              },
              value: 57.3348,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-01-02T00:00:00.000Z',
              },
              value: 55.8872,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-01-03T00:00:00.000Z',
              },
              value: 49.1598,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-01-04T00:00:00.000Z',
              },
              value: 52.067,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-01-05T00:00:00.000Z',
              },
              value: 48.9816,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-01-06T00:00:00.000Z',
              },
              value: 45.8124,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-01-07T00:00:00.000Z',
              },
              value: 48.2764,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-01-08T00:00:00.000Z',
              },
              value: 49.9899,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-01-09T00:00:00.000Z',
              },
              value: 46.7841,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-01-10T00:00:00.000Z',
              },
              value: 50.4238,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-01-11T00:00:00.000Z',
              },
              value: 47.3706,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-01-12T00:00:00.000Z',
              },
              value: 48.0712,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-01-13T00:00:00.000Z',
              },
              value: 46.7621,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-01-14T00:00:00.000Z',
              },
              value: 59.6721,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-01-15T00:00:00.000Z',
              },
              value: 49.8908,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-01-16T00:00:00.000Z',
              },
              value: 47.4001,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-01-17T00:00:00.000Z',
              },
              value: 58.2028,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-01-18T00:00:00.000Z',
              },
              value: 52.8821,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-01-19T00:00:00.000Z',
              },
              value: 52.0328,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-01-20T00:00:00.000Z',
              },
              value: 46.6148,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-01-21T00:00:00.000Z',
              },
              value: 53.7859,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-01-22T00:00:00.000Z',
              },
              value: 57.5671,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-01-23T00:00:00.000Z',
              },
              value: 61.9401,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-01-24T00:00:00.000Z',
              },
              value: 51.4336,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-01-25T00:00:00.000Z',
              },
              value: 50.2796,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-01-26T00:00:00.000Z',
              },
              value: 50.9196,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-01-27T00:00:00.000Z',
              },
              value: 60.949600000000004,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-01-28T00:00:00.000Z',
              },
              value: 51.8184,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-01-29T00:00:00.000Z',
              },
              value: 51.3089,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-01-30T00:00:00.000Z',
              },
              value: 50.5259,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-01-31T00:00:00.000Z',
              },
              value: 45.32,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-02-01T00:00:00.000Z',
              },
              value: 46.9634,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-02-02T00:00:00.000Z',
              },
              value: 52.1821,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-02-03T00:00:00.000Z',
              },
              value: 58.7015,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-02-04T00:00:00.000Z',
              },
              value: 55.1677,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-02-05T00:00:00.000Z',
              },
              value: 55.8212,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-02-06T00:00:00.000Z',
              },
              value: 52.0182,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-02-07T00:00:00.000Z',
              },
              value: 47.5441,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-02-08T00:00:00.000Z',
              },
              value: 51.3638,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-02-09T00:00:00.000Z',
              },
              value: 52.3217,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-02-10T00:00:00.000Z',
              },
              value: 40.8973,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-02-11T00:00:00.000Z',
              },
              value: 47.5217,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-02-12T00:00:00.000Z',
              },
              value: 52.7677,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-02-13T00:00:00.000Z',
              },
              value: 56.2954,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-02-14T00:00:00.000Z',
              },
              value: 50.8635,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-02-15T00:00:00.000Z',
              },
              value: 55.7307,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-02-16T00:00:00.000Z',
              },
              value: 61.809200000000004,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-02-17T00:00:00.000Z',
              },
              value: 53.0203,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-02-18T00:00:00.000Z',
              },
              value: 55.0918,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-02-19T00:00:00.000Z',
              },
              value: 49.1548,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-02-20T00:00:00.000Z',
              },
              value: 52.1847,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-02-21T00:00:00.000Z',
              },
              value: 54.8135,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-02-22T00:00:00.000Z',
              },
              value: 39.5124,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-02-23T00:00:00.000Z',
              },
              value: 53.7608,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-02-24T00:00:00.000Z',
              },
              value: 47.681400000000004,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-02-25T00:00:00.000Z',
              },
              value: 48.803,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-02-26T00:00:00.000Z',
              },
              value: 42.3833,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-02-27T00:00:00.000Z',
              },
              value: 48.3621,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-02-28T00:00:00.000Z',
              },
              value: 55.237,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-03-01T00:00:00.000Z',
              },
              value: 50.0887,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-03-02T00:00:00.000Z',
              },
              value: 51.3202,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-03-03T00:00:00.000Z',
              },
              value: 50.3271,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-03-04T00:00:00.000Z',
              },
              value: 51.034,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-03-05T00:00:00.000Z',
              },
              value: 54.0065,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-03-06T00:00:00.000Z',
              },
              value: 57.3699,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-03-07T00:00:00.000Z',
              },
              value: 51.2558,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-03-08T00:00:00.000Z',
              },
              value: 57.3344,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-03-09T00:00:00.000Z',
              },
              value: 56.8661,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-03-10T00:00:00.000Z',
              },
              value: 56.2001,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-03-11T00:00:00.000Z',
              },
              value: 48.0356,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-03-12T00:00:00.000Z',
              },
              value: 51.4099,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-03-13T00:00:00.000Z',
              },
              value: 43.9356,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-03-14T00:00:00.000Z',
              },
              value: 50.6902,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-03-15T00:00:00.000Z',
              },
              value: 55.325,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-03-16T00:00:00.000Z',
              },
              value: 51.3391,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-03-17T00:00:00.000Z',
              },
              value: 51.3095,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-03-18T00:00:00.000Z',
              },
              value: 46.5004,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-03-19T00:00:00.000Z',
              },
              value: 53.0714,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-03-20T00:00:00.000Z',
              },
              value: 47.7409,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-03-21T00:00:00.000Z',
              },
              value: 53.7996,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-03-22T00:00:00.000Z',
              },
              value: 58.701,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-03-23T00:00:00.000Z',
              },
              value: 44.0159,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-03-24T00:00:00.000Z',
              },
              value: 47.9631,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-03-25T00:00:00.000Z',
              },
              value: 56.1958,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-03-26T00:00:00.000Z',
              },
              value: 47.7132,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-03-27T00:00:00.000Z',
              },
              value: 53.0231,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-03-28T00:00:00.000Z',
              },
              value: 63.582,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-03-29T00:00:00.000Z',
              },
              value: 54.259,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-03-30T00:00:00.000Z',
              },
              value: 54.1663,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-03-31T00:00:00.000Z',
              },
              value: 54.1455,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-04-01T00:00:00.000Z',
              },
              value: 48.8061,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-04-02T00:00:00.000Z',
              },
              value: 51.7059,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-04-03T00:00:00.000Z',
              },
              value: 47.8587,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-04-04T00:00:00.000Z',
              },
              value: 54.0791,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-04-05T00:00:00.000Z',
              },
              value: 50.253,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-04-06T00:00:00.000Z',
              },
              value: 48.3905,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-04-07T00:00:00.000Z',
              },
              value: 57.2572,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-04-08T00:00:00.000Z',
              },
              value: 55.7434,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-04-09T00:00:00.000Z',
              },
              value: 54.9768,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-04-10T00:00:00.000Z',
              },
              value: 53.905,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-04-11T00:00:00.000Z',
              },
              value: 55.2388,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-04-12T00:00:00.000Z',
              },
              value: 57.962199999999996,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-04-13T00:00:00.000Z',
              },
              value: 49.4761,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-04-14T00:00:00.000Z',
              },
              value: 54.9117,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-04-15T00:00:00.000Z',
              },
              value: 48.9433,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-04-16T00:00:00.000Z',
              },
              value: 53.1718,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-04-17T00:00:00.000Z',
              },
              value: 48.9247,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-04-18T00:00:00.000Z',
              },
              value: 47.8488,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-04-19T00:00:00.000Z',
              },
              value: 46.5586,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-04-20T00:00:00.000Z',
              },
              value: 51.2547,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-04-21T00:00:00.000Z',
              },
              value: 51.2523,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-04-22T00:00:00.000Z',
              },
              value: 49.3417,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-04-23T00:00:00.000Z',
              },
              value: 50.523,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-04-24T00:00:00.000Z',
              },
              value: 59.336800000000004,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-04-25T00:00:00.000Z',
              },
              value: 50.8818,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-04-26T00:00:00.000Z',
              },
              value: 56.9044,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-04-27T00:00:00.000Z',
              },
              value: 48.1788,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-04-28T00:00:00.000Z',
              },
              value: 50.2967,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-04-29T00:00:00.000Z',
              },
              value: 50.2566,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-04-30T00:00:00.000Z',
              },
              value: 55.8117,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-05-01T00:00:00.000Z',
              },
              value: 52.2978,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-05-02T00:00:00.000Z',
              },
              value: 52.2579,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-05-03T00:00:00.000Z',
              },
              value: 54.6299,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-05-04T00:00:00.000Z',
              },
              value: 46.9293,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-05-05T00:00:00.000Z',
              },
              value: 56.5335,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-05-06T00:00:00.000Z',
              },
              value: 51.1976,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-05-07T00:00:00.000Z',
              },
              value: 54.952799999999996,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-05-08T00:00:00.000Z',
              },
              value: 46.3697,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-05-09T00:00:00.000Z',
              },
              value: 51.1032,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-05-10T00:00:00.000Z',
              },
              value: 50.254799999999996,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-05-11T00:00:00.000Z',
              },
              value: 51.5538,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-05-12T00:00:00.000Z',
              },
              value: 50.012,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-05-13T00:00:00.000Z',
              },
              value: 49.1875,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-05-14T00:00:00.000Z',
              },
              value: 53.3766,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-05-15T00:00:00.000Z',
              },
              value: 46.7491,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-05-16T00:00:00.000Z',
              },
              value: 48.0329,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-05-17T00:00:00.000Z',
              },
              value: 49.6736,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-05-18T00:00:00.000Z',
              },
              value: 50.2115,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-05-19T00:00:00.000Z',
              },
              value: 56.7072,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-05-20T00:00:00.000Z',
              },
              value: 42.3952,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-05-21T00:00:00.000Z',
              },
              value: 55.8574,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-05-22T00:00:00.000Z',
              },
              value: 54.0683,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-05-23T00:00:00.000Z',
              },
              value: 49.0555,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-05-24T00:00:00.000Z',
              },
              value: 50.5015,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-05-25T00:00:00.000Z',
              },
              value: 50.475699999999996,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-05-26T00:00:00.000Z',
              },
              value: 51.658,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-05-27T00:00:00.000Z',
              },
              value: 52.9607,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-05-28T00:00:00.000Z',
              },
              value: 48.096,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-05-29T00:00:00.000Z',
              },
              value: 52.255,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-05-30T00:00:00.000Z',
              },
              value: 49.62,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-05-31T00:00:00.000Z',
              },
              value: 46.8764,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-06-01T00:00:00.000Z',
              },
              value: 57.643,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-06-02T00:00:00.000Z',
              },
              value: 45.8179,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-06-03T00:00:00.000Z',
              },
              value: 52.5965,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-06-04T00:00:00.000Z',
              },
              value: 41.2293,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-06-05T00:00:00.000Z',
              },
              value: 53.7929,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-06-06T00:00:00.000Z',
              },
              value: 53.2968,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-06-07T00:00:00.000Z',
              },
              value: 52.8734,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-06-08T00:00:00.000Z',
              },
              value: 52.9873,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-06-09T00:00:00.000Z',
              },
              value: 49.4139,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-06-10T00:00:00.000Z',
              },
              value: 52.5096,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-06-11T00:00:00.000Z',
              },
              value: 49.6525,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-06-12T00:00:00.000Z',
              },
              value: 46.3606,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-06-13T00:00:00.000Z',
              },
              value: 54.9751,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-06-14T00:00:00.000Z',
              },
              value: 58.0663,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-06-15T00:00:00.000Z',
              },
              value: 50.1619,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-06-16T00:00:00.000Z',
              },
              value: 54.878299999999996,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-06-17T00:00:00.000Z',
              },
              value: 56.7506,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-06-18T00:00:00.000Z',
              },
              value: 44.690599999999996,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-06-19T00:00:00.000Z',
              },
              value: 50.4343,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-06-20T00:00:00.000Z',
              },
              value: 51.9739,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-06-21T00:00:00.000Z',
              },
              value: 57.1713,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-06-22T00:00:00.000Z',
              },
              value: 58.5749,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-06-23T00:00:00.000Z',
              },
              value: 49.1837,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-06-24T00:00:00.000Z',
              },
              value: 60.6319,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-06-25T00:00:00.000Z',
              },
              value: 49.3015,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-06-26T00:00:00.000Z',
              },
              value: 53.772800000000004,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-06-27T00:00:00.000Z',
              },
              value: 57.0247,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-06-28T00:00:00.000Z',
              },
              value: 50.2068,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-06-29T00:00:00.000Z',
              },
              value: 51.7476,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-06-30T00:00:00.000Z',
              },
              value: 51.7897,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-07-01T00:00:00.000Z',
              },
              value: 43.2547,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-07-02T00:00:00.000Z',
              },
              value: 49.7508,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-07-03T00:00:00.000Z',
              },
              value: 50.8677,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-07-04T00:00:00.000Z',
              },
              value: 53.8127,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-07-05T00:00:00.000Z',
              },
              value: 44.7265,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-07-06T00:00:00.000Z',
              },
              value: 48.9767,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-07-07T00:00:00.000Z',
              },
              value: 55.1233,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-07-08T00:00:00.000Z',
              },
              value: 56.608,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-07-09T00:00:00.000Z',
              },
              value: 40.2527,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-07-10T00:00:00.000Z',
              },
              value: 47.4664,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-07-11T00:00:00.000Z',
              },
              value: 57.9053,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-07-12T00:00:00.000Z',
              },
              value: 51.7005,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-07-13T00:00:00.000Z',
              },
              value: 47.9275,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-07-14T00:00:00.000Z',
              },
              value: 58.2526,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-07-15T00:00:00.000Z',
              },
              value: 51.8424,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-07-16T00:00:00.000Z',
              },
              value: 49.6519,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-07-17T00:00:00.000Z',
              },
              value: 46.8587,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-07-18T00:00:00.000Z',
              },
              value: 52.4,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-07-19T00:00:00.000Z',
              },
              value: 51.7178,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-07-20T00:00:00.000Z',
              },
              value: 54.118,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-07-21T00:00:00.000Z',
              },
              value: 41.8584,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-07-22T00:00:00.000Z',
              },
              value: 53.7259,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-07-23T00:00:00.000Z',
              },
              value: 45.5728,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-07-24T00:00:00.000Z',
              },
              value: 53.3997,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-07-25T00:00:00.000Z',
              },
              value: 57.9396,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-07-26T00:00:00.000Z',
              },
              value: 46.4737,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-07-27T00:00:00.000Z',
              },
              value: 53.823,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-07-28T00:00:00.000Z',
              },
              value: 52.9751,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-07-29T00:00:00.000Z',
              },
              value: 53.394,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-07-30T00:00:00.000Z',
              },
              value: 46.2056,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-07-31T00:00:00.000Z',
              },
              value: 54.5124,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-08-01T00:00:00.000Z',
              },
              value: 49.8477,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-08-02T00:00:00.000Z',
              },
              value: 51.169,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-08-03T00:00:00.000Z',
              },
              value: 53.7751,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-08-04T00:00:00.000Z',
              },
              value: 53.0452,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-08-05T00:00:00.000Z',
              },
              value: 51.3044,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-08-06T00:00:00.000Z',
              },
              value: 53.5934,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-08-07T00:00:00.000Z',
              },
              value: 47.056400000000004,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-08-08T00:00:00.000Z',
              },
              value: 55.9711,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-08-09T00:00:00.000Z',
              },
              value: 56.9958,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-08-10T00:00:00.000Z',
              },
              value: 56.2975,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-08-11T00:00:00.000Z',
              },
              value: 49.9003,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-08-12T00:00:00.000Z',
              },
              value: 54.3771,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-08-13T00:00:00.000Z',
              },
              value: 57.0866,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-08-14T00:00:00.000Z',
              },
              value: 50.4839,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-08-15T00:00:00.000Z',
              },
              value: 58.4497,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-08-16T00:00:00.000Z',
              },
              value: 52.2485,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-08-17T00:00:00.000Z',
              },
              value: 48.3133,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-08-18T00:00:00.000Z',
              },
              value: 49.7512,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-08-19T00:00:00.000Z',
              },
              value: 50.3181,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-08-20T00:00:00.000Z',
              },
              value: 49.8157,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-08-21T00:00:00.000Z',
              },
              value: 55.0081,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-08-22T00:00:00.000Z',
              },
              value: 49.6162,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-08-23T00:00:00.000Z',
              },
              value: 54.1143,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-08-24T00:00:00.000Z',
              },
              value: 52.6172,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-08-25T00:00:00.000Z',
              },
              value: 50.5825,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-08-26T00:00:00.000Z',
              },
              value: 46.1112,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-08-27T00:00:00.000Z',
              },
              value: 52.1606,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-08-28T00:00:00.000Z',
              },
              value: 48.8702,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-08-29T00:00:00.000Z',
              },
              value: 58.9351,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-08-30T00:00:00.000Z',
              },
              value: 55.4068,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-08-31T00:00:00.000Z',
              },
              value: 45.746900000000004,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-09-01T00:00:00.000Z',
              },
              value: 46.3907,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-09-02T00:00:00.000Z',
              },
              value: 48.0379,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-09-03T00:00:00.000Z',
              },
              value: 61.0195,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-09-04T00:00:00.000Z',
              },
              value: 52.2819,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
            {
              timestamp: {
                $date: '2023-09-05T00:00:00.000Z',
              },
              value: 54.4219,
              duration_in_seconds: {
                $numberLong: '86400',
              },
            },
          ],
          total_value: 31717.951,
          duration_in_seconds: {
            $numberLong: '52963200',
          },
          count_values: 613,
          meter_info: {
            serial_number: 'PT9905029844968032EX',
          },
        },
      ],
      installation_code: 'PT9905029844968032EI',
      utility_type: 'electricity',
      measurement_unit: 'KWH',
      meter_instalation: {
        _id: {
          $oid: '64f743d05a81586f3391e286',
        },
        meter_id: {
          $oid: '64f743d0ec9637c66da3b5b5',
        },
        meter_doc: {
          _id: {
            $oid: '64f743d0ec9637c66da3b5b5',
          },
          meter_info: {
            serial_number: 'PT9905029844968032EX',
          },
        },
        installation_id: {
          $oid: '64f743d0ec9637c66da3b5c0',
        },
        installation_doc: {
          _id: {
            $oid: '64f743d0ec9637c66da3b5c0',
          },
          code: 'PT9905029844968032EX',
          created_date: {
            $date: '2023-09-05T15:05:52.701Z',
          },
          installation_info: {
            service_type: 'surplus',
            utility_type: 'electricity',
          },
          status: 'active',
        },
      },
      data_request_id: {
        $oid: '64f74d2df9ab28594b1cf28f',
      },
      period_from: {
        $date: '2022-01-01T00:00:00.000Z',
      },
      period_to: {
        $date: '2023-09-05T23:59:59.000Z',
      },
      granularity: 'daily',
      release_date: {
        $date: '2023-09-05T15:46:00.138Z',
      },
      expiration_date: {
        $date: '2023-10-05T15:46:00.138Z',
      },
    },
    { returnNewDocument: true },
  );
});

const fnDescription = (action) => {
  it('Obter resultado endpoint', async () => {
    const handler = jest.fn(action);
    const result = await handler({ query, headers, body }, response);

    expect(result).not.toBeNull();
    expect(result.length).toBe(1);
  });
};

// npm test -- ./test/unit/Http_Get_req_data_results.test.js
bootstrapDatabase(
  'Http_Get_req_data_results',
  fnDescription,
  { query, headers, body },
  response,
);
