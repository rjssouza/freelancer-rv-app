const _ = require('lodash');
const { bootstrapDatabase, getDatabase } = require('../init');

const MDM_MEASURES_DATA = 'mdm_measures_data_legacy';
const MDM_MEASURES_LAKE = 'mdm_measures_lake';
const OK = 'OK';

const measureLake = {
  _id: '6528051242ba57201dc35499',
  installation_code: 'PT0002970034337218PA',
  timestamp: '2023-04-01T00:00:00.000Z',
  utility_type: 'electricity',
  granularity: 'quarter-hour',
  service_type: 'surplus',
  measure_type: 'permanent',
  release_date: '2023-10-12',
  measurement_unit: 'KWH',
  source_type: 'diagram',
  type_ref: 'usijwganrn',
  source: 'dso',
  values: [
    {
      value: 0,
      period_from: '2023-04-01T00:00:00.000Z',
      period_to: '2023-04-01T00:15:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0,
      period_from: '2023-04-01T00:15:00.000Z',
      period_to: '2023-04-01T00:30:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0,
      period_from: '2023-04-01T00:30:00.000Z',
      period_to: '2023-04-01T01:00:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0,
      period_from: '2023-04-01T00:45:00.000Z',
      period_to: '2023-04-01T01:30:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0,
      period_from: '2023-04-01T01:00:00.000Z',
      period_to: '2023-04-01T02:00:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0,
      period_from: '2023-04-01T01:15:00.000Z',
      period_to: '2023-04-01T02:30:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0,
      period_from: '2023-04-01T01:30:00.000Z',
      period_to: '2023-04-01T03:00:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0,
      period_from: '2023-04-01T01:45:00.000Z',
      period_to: '2023-04-01T03:30:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0,
      period_from: '2023-04-01T02:00:00.000Z',
      period_to: '2023-04-01T04:00:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0,
      period_from: '2023-04-01T02:15:00.000Z',
      period_to: '2023-04-01T04:30:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0,
      period_from: '2023-04-01T02:30:00.000Z',
      period_to: '2023-04-01T05:00:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0,
      period_from: '2023-04-01T02:45:00.000Z',
      period_to: '2023-04-01T05:30:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0,
      period_from: '2023-04-01T03:00:00.000Z',
      period_to: '2023-04-01T06:00:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0,
      period_from: '2023-04-01T03:15:00.000Z',
      period_to: '2023-04-01T06:30:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0,
      period_from: '2023-04-01T03:30:00.000Z',
      period_to: '2023-04-01T07:00:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0,
      period_from: '2023-04-01T03:45:00.000Z',
      period_to: '2023-04-01T07:30:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0,
      period_from: '2023-04-01T04:00:00.000Z',
      period_to: '2023-04-01T08:00:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0,
      period_from: '2023-04-01T04:15:00.000Z',
      period_to: '2023-04-01T08:30:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0,
      period_from: '2023-04-01T04:30:00.000Z',
      period_to: '2023-04-01T09:00:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0,
      period_from: '2023-04-01T04:45:00.000Z',
      period_to: '2023-04-01T09:30:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0,
      period_from: '2023-04-01T05:00:00.000Z',
      period_to: '2023-04-01T10:00:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0,
      period_from: '2023-04-01T05:15:00.000Z',
      period_to: '2023-04-01T10:30:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0,
      period_from: '2023-04-01T05:30:00.000Z',
      period_to: '2023-04-01T11:00:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0,
      period_from: '2023-04-01T05:45:00.000Z',
      period_to: '2023-04-01T11:30:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0.9667,
      period_from: '2023-04-01T06:00:00.000Z',
      period_to: '2023-04-01T12:00:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0.286,
      period_from: '2023-04-01T06:15:00.000Z',
      period_to: '2023-04-01T12:30:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 1.3757,
      period_from: '2023-04-01T06:30:00.000Z',
      period_to: '2023-04-01T13:00:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0.2028,
      period_from: '2023-04-01T06:45:00.000Z',
      period_to: '2023-04-01T13:30:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 1.0851,
      period_from: '2023-04-01T07:00:00.000Z',
      period_to: '2023-04-01T14:00:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 1.2957,
      period_from: '2023-04-01T07:15:00.000Z',
      period_to: '2023-04-01T14:30:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 1.1167,
      period_from: '2023-04-01T07:30:00.000Z',
      period_to: '2023-04-01T15:00:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0.9755,
      period_from: '2023-04-01T07:45:00.000Z',
      period_to: '2023-04-01T15:30:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 1.3145,
      period_from: '2023-04-01T08:00:00.000Z',
      period_to: '2023-04-01T16:00:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0.6928,
      period_from: '2023-04-01T08:15:00.000Z',
      period_to: '2023-04-01T16:30:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0.6768,
      period_from: '2023-04-01T08:30:00.000Z',
      period_to: '2023-04-01T17:00:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0.1288,
      period_from: '2023-04-01T08:45:00.000Z',
      period_to: '2023-04-01T17:30:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0.3598,
      period_from: '2023-04-01T09:00:00.000Z',
      period_to: '2023-04-01T18:00:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0.1842,
      period_from: '2023-04-01T09:15:00.000Z',
      period_to: '2023-04-01T18:30:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0.2538,
      period_from: '2023-04-01T09:30:00.000Z',
      period_to: '2023-04-01T19:00:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0.7683,
      period_from: '2023-04-01T09:45:00.000Z',
      period_to: '2023-04-01T19:30:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0.0638,
      period_from: '2023-04-01T10:00:00.000Z',
      period_to: '2023-04-01T20:00:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 1.3197,
      period_from: '2023-04-01T10:15:00.000Z',
      period_to: '2023-04-01T20:30:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 1.1547,
      period_from: '2023-04-01T10:30:00.000Z',
      period_to: '2023-04-01T21:00:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0.7705,
      period_from: '2023-04-01T10:45:00.000Z',
      period_to: '2023-04-01T21:30:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 1.3307,
      period_from: '2023-04-01T11:00:00.000Z',
      period_to: '2023-04-01T22:00:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0.7541,
      period_from: '2023-04-01T11:15:00.000Z',
      period_to: '2023-04-01T22:30:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 1.0441,
      period_from: '2023-04-01T11:30:00.000Z',
      period_to: '2023-04-01T23:00:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 1.9403,
      period_from: '2023-04-01T11:45:00.000Z',
      period_to: '2023-04-01T23:30:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 1.9904,
      period_from: '2023-04-01T12:00:00.000Z',
      period_to: '2023-04-02T00:00:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 1.861,
      period_from: '2023-04-01T12:15:00.000Z',
      period_to: '2023-04-02T00:30:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 1.5923,
      period_from: '2023-04-01T12:30:00.000Z',
      period_to: '2023-04-02T01:00:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 1.3817,
      period_from: '2023-04-01T12:45:00.000Z',
      period_to: '2023-04-02T01:30:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 1.8686,
      period_from: '2023-04-01T13:00:00.000Z',
      period_to: '2023-04-02T02:00:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0.3984,
      period_from: '2023-04-01T13:15:00.000Z',
      period_to: '2023-04-02T02:30:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0.6667,
      period_from: '2023-04-01T13:30:00.000Z',
      period_to: '2023-04-02T03:00:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0.5371,
      period_from: '2023-04-01T13:45:00.000Z',
      period_to: '2023-04-02T03:30:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0.0814,
      period_from: '2023-04-01T14:00:00.000Z',
      period_to: '2023-04-02T04:00:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 1.8502,
      period_from: '2023-04-01T14:15:00.000Z',
      period_to: '2023-04-02T04:30:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 1.881,
      period_from: '2023-04-01T14:30:00.000Z',
      period_to: '2023-04-02T05:00:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0.7567,
      period_from: '2023-04-01T14:45:00.000Z',
      period_to: '2023-04-02T05:30:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 1.2121,
      period_from: '2023-04-01T15:00:00.000Z',
      period_to: '2023-04-02T06:00:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 1.5764,
      period_from: '2023-04-01T15:15:00.000Z',
      period_to: '2023-04-02T06:30:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0.0192,
      period_from: '2023-04-01T15:30:00.000Z',
      period_to: '2023-04-02T07:00:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 1.6561,
      period_from: '2023-04-01T15:45:00.000Z',
      period_to: '2023-04-02T07:30:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 1.194,
      period_from: '2023-04-01T16:00:00.000Z',
      period_to: '2023-04-02T08:00:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 1.2595,
      period_from: '2023-04-01T16:15:00.000Z',
      period_to: '2023-04-02T08:30:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 1.2129,
      period_from: '2023-04-01T16:30:00.000Z',
      period_to: '2023-04-02T09:00:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 1.6246,
      period_from: '2023-04-01T16:45:00.000Z',
      period_to: '2023-04-02T09:30:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0.6131,
      period_from: '2023-04-01T17:00:00.000Z',
      period_to: '2023-04-02T10:00:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0.0704,
      period_from: '2023-04-01T17:15:00.000Z',
      period_to: '2023-04-02T10:30:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 1.2874,
      period_from: '2023-04-01T17:30:00.000Z',
      period_to: '2023-04-02T11:00:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 1.3489,
      period_from: '2023-04-01T17:45:00.000Z',
      period_to: '2023-04-02T11:30:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0.5914,
      period_from: '2023-04-01T18:00:00.000Z',
      period_to: '2023-04-02T12:00:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0.9956,
      period_from: '2023-04-01T18:15:00.000Z',
      period_to: '2023-04-02T12:30:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0.1549,
      period_from: '2023-04-01T18:30:00.000Z',
      period_to: '2023-04-02T13:00:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0.0329,
      period_from: '2023-04-01T18:45:00.000Z',
      period_to: '2023-04-02T13:30:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 1.5749,
      period_from: '2023-04-01T19:00:00.000Z',
      period_to: '2023-04-02T14:00:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0.7269,
      period_from: '2023-04-01T19:15:00.000Z',
      period_to: '2023-04-02T14:30:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 1.3982,
      period_from: '2023-04-01T19:30:00.000Z',
      period_to: '2023-04-02T15:00:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 1.9476,
      period_from: '2023-04-01T19:45:00.000Z',
      period_to: '2023-04-02T15:30:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0,
      period_from: '2023-04-01T20:00:00.000Z',
      period_to: '2023-04-02T16:00:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0,
      period_from: '2023-04-01T20:15:00.000Z',
      period_to: '2023-04-02T16:30:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0,
      period_from: '2023-04-01T20:30:00.000Z',
      period_to: '2023-04-02T17:00:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0,
      period_from: '2023-04-01T20:45:00.000Z',
      period_to: '2023-04-02T17:30:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0,
      period_from: '2023-04-01T21:00:00.000Z',
      period_to: '2023-04-02T18:00:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0,
      period_from: '2023-04-01T21:15:00.000Z',
      period_to: '2023-04-02T18:30:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0,
      period_from: '2023-04-01T21:30:00.000Z',
      period_to: '2023-04-02T19:00:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0,
      period_from: '2023-04-01T21:45:00.000Z',
      period_to: '2023-04-02T19:30:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0,
      period_from: '2023-04-01T22:00:00.000Z',
      period_to: '2023-04-02T20:00:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0,
      period_from: '2023-04-01T22:15:00.000Z',
      period_to: '2023-04-02T20:30:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0,
      period_from: '2023-04-01T22:30:00.000Z',
      period_to: '2023-04-02T21:00:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0,
      period_from: '2023-04-01T22:45:00.000Z',
      period_to: '2023-04-02T21:30:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0,
      period_from: '2023-04-01T23:00:00.000Z',
      period_to: '2023-04-02T22:00:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0,
      period_from: '2023-04-01T23:15:00.000Z',
      period_to: '2023-04-02T22:30:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0,
      period_from: '2023-04-01T23:30:00.000Z',
      period_to: '2023-04-02T23:00:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
    {
      value: 0,
      period_from: '2023-04-01T23:45:00.000Z',
      period_to: '2023-04-02T23:30:00.000Z',
      type: 'real',
      adjustment_type: '',
    },
  ],
  created_at: '2023-04-01T00:00:00.000Z',
  created_by: 'MARTEUser',
};

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
    coll: 'mdm_measures_lake',
  },
  documentKey: {
    _id: '65006067ef23957fe27faa30',
  },
};

async function registerLake() {
  const coll = await getDatabase(MDM_MEASURES_LAKE);
  const resultInsert = await coll.insertOne(measureLake);
  const result = await coll.findOne({ _id: resultInsert.insertedId });
  dataRequest.fullDocument = result;
}

async function getMeterData() {
  const coll = await getDatabase(MDM_MEASURES_DATA);
  const result = await coll.findOne({
    'header.installation_code': measureLake.installation_code,
  });

  return result;
}

beforeAll(async () => {
  await registerLake();
});

const fnDescription = (action) => {
  it('Processar dados de um dia', async () => {
    const handler = jest.fn(action);
    const result = await handler(dataRequest);
    const measureData = await getMeterData();
    const total = _.sumBy(measureLake.values, (element) => element.value);

    expect(result).toBe(OK);
    expect(measureData.created_at).toBeDefined();
    expect(measureData.sum_values).toBe(Math.round(total * 10000) / 10000);
    expect(measureData.count_values).toBe(96);
    expect(measureData.in_seconds).toBe(86400);
  });
};

// npm test -- ./test/unit/Trigger_mdm_measures_lake.test.js
bootstrapDatabase('Trigger_mdm_measures_lake', fnDescription, dataRequest);
