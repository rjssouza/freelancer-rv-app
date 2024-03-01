const { bootstrapDatabase, getDatabase } = require('../init');

const MDM_MEASURES_DATA = 'mdm_measures_data_legacy';

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
const query = undefined;
const body = undefined;
const response = undefined;
const CPE = 'PT9905200692634955EX';

beforeAll(async () => {
  const coll = await getDatabase(MDM_MEASURES_DATA);
  await coll.insertOne({
    sum_values: 61.5697,
    count_values: {
      $numberLong: '96',
    },
    header: {
      _id: '6512d211be1fd30f052addb5',
      installation_code: CPE,
      datetime: {
        $date: '2022-06-03T00:00:00.000Z',
      },
      utility_type: 'electricity',
      granularity: 'quarter-hour',
      service_type: 'surplus',
      measure_type: 'permanent',
      release_date: '2023-09-26',
      measurement_unit: 'KWH',
      source_type: 'diagram',
      type_ref: 'nvuelbgxmp',
      source: 'dso',
      values: [
        {
          value: 0,
          timestamp: {
            $date: '2022-06-03T00:00:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0,
          timestamp: {
            $date: '2022-06-03T00:15:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0,
          timestamp: {
            $date: '2022-06-03T00:30:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0,
          timestamp: {
            $date: '2022-06-03T00:45:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0,
          timestamp: {
            $date: '2022-06-03T01:00:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0,
          timestamp: {
            $date: '2022-06-03T01:15:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0,
          timestamp: {
            $date: '2022-06-03T01:30:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0,
          timestamp: {
            $date: '2022-06-03T01:45:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0,
          timestamp: {
            $date: '2022-06-03T02:00:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0,
          timestamp: {
            $date: '2022-06-03T02:15:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0,
          timestamp: {
            $date: '2022-06-03T02:30:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0,
          timestamp: {
            $date: '2022-06-03T02:45:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0,
          timestamp: {
            $date: '2022-06-03T03:00:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0,
          timestamp: {
            $date: '2022-06-03T03:15:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0,
          timestamp: {
            $date: '2022-06-03T03:30:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0,
          timestamp: {
            $date: '2022-06-03T03:45:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0,
          timestamp: {
            $date: '2022-06-03T04:00:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0,
          timestamp: {
            $date: '2022-06-03T04:15:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0,
          timestamp: {
            $date: '2022-06-03T04:30:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0,
          timestamp: {
            $date: '2022-06-03T04:45:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0,
          timestamp: {
            $date: '2022-06-03T05:00:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0,
          timestamp: {
            $date: '2022-06-03T05:15:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0,
          timestamp: {
            $date: '2022-06-03T05:30:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0,
          timestamp: {
            $date: '2022-06-03T05:45:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0.0298,
          timestamp: {
            $date: '2022-06-03T06:00:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 1.1389,
          timestamp: {
            $date: '2022-06-03T06:15:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 1.4134,
          timestamp: {
            $date: '2022-06-03T06:30:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 1.8257,
          timestamp: {
            $date: '2022-06-03T06:45:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 1.0949,
          timestamp: {
            $date: '2022-06-03T07:00:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 1.1596,
          timestamp: {
            $date: '2022-06-03T07:15:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 1.7447,
          timestamp: {
            $date: '2022-06-03T07:30:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0.7442,
          timestamp: {
            $date: '2022-06-03T07:45:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0.6773,
          timestamp: {
            $date: '2022-06-03T08:00:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 1.0149,
          timestamp: {
            $date: '2022-06-03T08:15:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0.205,
          timestamp: {
            $date: '2022-06-03T08:30:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0.9422,
          timestamp: {
            $date: '2022-06-03T08:45:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0.3208,
          timestamp: {
            $date: '2022-06-03T09:00:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0.6436,
          timestamp: {
            $date: '2022-06-03T09:15:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0.2234,
          timestamp: {
            $date: '2022-06-03T09:30:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0.5074,
          timestamp: {
            $date: '2022-06-03T09:45:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0.4695,
          timestamp: {
            $date: '2022-06-03T10:00:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 1.5954,
          timestamp: {
            $date: '2022-06-03T10:15:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 1.1213,
          timestamp: {
            $date: '2022-06-03T10:30:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 1.5935,
          timestamp: {
            $date: '2022-06-03T10:45:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0.6174,
          timestamp: {
            $date: '2022-06-03T11:00:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 1.6581,
          timestamp: {
            $date: '2022-06-03T11:15:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 1.8356,
          timestamp: {
            $date: '2022-06-03T11:30:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 1.9054,
          timestamp: {
            $date: '2022-06-03T11:45:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 1.3671,
          timestamp: {
            $date: '2022-06-03T12:00:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0.1226,
          timestamp: {
            $date: '2022-06-03T12:15:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0.9876,
          timestamp: {
            $date: '2022-06-03T12:30:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 1.1806,
          timestamp: {
            $date: '2022-06-03T12:45:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0.0416,
          timestamp: {
            $date: '2022-06-03T13:00:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 1.3535,
          timestamp: {
            $date: '2022-06-03T13:15:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 1.6825,
          timestamp: {
            $date: '2022-06-03T13:30:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 1.2695,
          timestamp: {
            $date: '2022-06-03T13:45:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0.2332,
          timestamp: {
            $date: '2022-06-03T14:00:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 1.9693,
          timestamp: {
            $date: '2022-06-03T14:15:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0.3832,
          timestamp: {
            $date: '2022-06-03T14:30:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 1.0843,
          timestamp: {
            $date: '2022-06-03T14:45:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0.9333,
          timestamp: {
            $date: '2022-06-03T15:00:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 1.6028,
          timestamp: {
            $date: '2022-06-03T15:15:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 1.5018,
          timestamp: {
            $date: '2022-06-03T15:30:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 1.1551,
          timestamp: {
            $date: '2022-06-03T15:45:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0.8408,
          timestamp: {
            $date: '2022-06-03T16:00:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 1.7089,
          timestamp: {
            $date: '2022-06-03T16:15:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 1.3941,
          timestamp: {
            $date: '2022-06-03T16:30:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 1.7171,
          timestamp: {
            $date: '2022-06-03T16:45:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 1.6569,
          timestamp: {
            $date: '2022-06-03T17:00:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 1.1523,
          timestamp: {
            $date: '2022-06-03T17:15:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0.9653,
          timestamp: {
            $date: '2022-06-03T17:30:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 1.0022,
          timestamp: {
            $date: '2022-06-03T17:45:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 1.3364,
          timestamp: {
            $date: '2022-06-03T18:00:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 1.8115,
          timestamp: {
            $date: '2022-06-03T18:15:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 1.5836,
          timestamp: {
            $date: '2022-06-03T18:30:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 1.512,
          timestamp: {
            $date: '2022-06-03T18:45:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0.656,
          timestamp: {
            $date: '2022-06-03T19:00:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 1.2837,
          timestamp: {
            $date: '2022-06-03T19:15:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0.8413,
          timestamp: {
            $date: '2022-06-03T19:30:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0.7576,
          timestamp: {
            $date: '2022-06-03T19:45:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0,
          timestamp: {
            $date: '2022-06-03T20:00:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0,
          timestamp: {
            $date: '2022-06-03T20:15:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0,
          timestamp: {
            $date: '2022-06-03T20:30:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0,
          timestamp: {
            $date: '2022-06-03T20:45:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0,
          timestamp: {
            $date: '2022-06-03T21:00:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0,
          timestamp: {
            $date: '2022-06-03T21:15:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0,
          timestamp: {
            $date: '2022-06-03T21:30:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0,
          timestamp: {
            $date: '2022-06-03T21:45:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0,
          timestamp: {
            $date: '2022-06-03T22:00:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0,
          timestamp: {
            $date: '2022-06-03T22:15:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0,
          timestamp: {
            $date: '2022-06-03T22:30:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0,
          timestamp: {
            $date: '2022-06-03T22:45:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0,
          timestamp: {
            $date: '2022-06-03T23:00:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0,
          timestamp: {
            $date: '2022-06-03T23:15:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0,
          timestamp: {
            $date: '2022-06-03T23:30:00.000Z',
          },
          status: 'communicated',
        },
        {
          value: 0,
          timestamp: {
            $date: '2022-06-03T23:45:00.000Z',
          },
          status: 'communicated',
        },
      ],
      meter_installation_id: '6512d21436ccd6f961063d42',
      meter_instalation: {
        _id: '6512d21436ccd6f961063d42',
        meter_id: '6512d214bd41a0efb170c23c',
        meter_doc: {
          _id: '6512d214bd41a0efb170c23c',
          meter_info: {
            serial_number: 'PT9905200692634955EX',
          },
          created_at: {
            $date: '2023-09-26T12:44:04.533Z',
          },
        },
        installation_id: '6512d214bd41a0efb170c2ac',
        installation_doc: {
          _id: '6512d214bd41a0efb170c2ac',
          code: 'PT9905200692634955EX',
          created_at: {
            $date: '2023-09-26T12:44:04.583Z',
          },
          installation_info: {
            service_type: 'surplus',
            utility_type: 'electricity',
          },
          status: 'active',
        },
        created_at: {
          $date: '2023-09-26T12:44:04.970Z',
        },
      },
    },
    timestamp: {
      $date: '2022-06-03T00:00:00.000Z',
    },
    in_seconds: {
      $numberLong: '86400',
    },
    created_at: {
      $date: '2023-09-26T12:44:05.100Z',
    },
  });
});

const fnDescription = (action) => {
  it('Deve retornar o resultado pelo installation code', async () => {
    const handler = jest.fn(action);
    const result = await handler({ query, headers, body }, response);

    expect(result.length).toBe(1);
    expect(result[0]._id).toBe(CPE);
  });
};

// npm test -- ./test/unit/Http_get_measures_data.test.js
bootstrapDatabase(
  'Http_get_measures_data',
  fnDescription,
  { query, headers, body },
  response,
);
