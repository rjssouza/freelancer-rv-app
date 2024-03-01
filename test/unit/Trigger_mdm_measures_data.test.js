const moment = require('moment');
const { bootstrapDatabase, getDatabase } = require('../init');
const triggerMdmMeasuresLake = require('../../functions/Trigger_mdm_measures_lake');
const httpCreateMeasureDummy = require('../../functions/Http_Create_Measure_Dummy');

const MDM_MEASURES_LAKE = 'mdm_measures_lake';
const MDM_MEASURES_DATA = 'mdm_measures_data_legacy';
const MDM_MEASURES_BEST_VALUES = 'mdm_measures_best_legacy';

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
  fullDocument: {
    _id: '652807882628476a87e6b6c3',
    sum_values: 53.8808,
    count_values: 96,
    header: {
      _id: '652807882628476a87e6b6a5',
      installation_code: 'PT0002970034337218PA',
      timestamp: '2023-04-01T00:00:00.000Z',
      utility_type: 'electricity',
      granularity: 'quarter-hour',
      service_type: 'surplus',
      measure_type: 'permanent',
      release_date: '2023-10-12',
      measurement_unit: 'KWH',
      source_type: 'diagram',
      type_ref: 'mgbrmddobi',
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
          value: 1.1356,
          period_from: '2023-04-01T06:00:00.000Z',
          period_to: '2023-04-01T12:00:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 0.5574,
          period_from: '2023-04-01T06:15:00.000Z',
          period_to: '2023-04-01T12:30:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 1.0952,
          period_from: '2023-04-01T06:30:00.000Z',
          period_to: '2023-04-01T13:00:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 0.6999,
          period_from: '2023-04-01T06:45:00.000Z',
          period_to: '2023-04-01T13:30:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 0.6544,
          period_from: '2023-04-01T07:00:00.000Z',
          period_to: '2023-04-01T14:00:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 0.8595,
          period_from: '2023-04-01T07:15:00.000Z',
          period_to: '2023-04-01T14:30:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 0.0597,
          period_from: '2023-04-01T07:30:00.000Z',
          period_to: '2023-04-01T15:00:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 0.8601,
          period_from: '2023-04-01T07:45:00.000Z',
          period_to: '2023-04-01T15:30:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 1.968,
          period_from: '2023-04-01T08:00:00.000Z',
          period_to: '2023-04-01T16:00:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 1.69,
          period_from: '2023-04-01T08:15:00.000Z',
          period_to: '2023-04-01T16:30:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 0.1637,
          period_from: '2023-04-01T08:30:00.000Z',
          period_to: '2023-04-01T17:00:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 1.4922,
          period_from: '2023-04-01T08:45:00.000Z',
          period_to: '2023-04-01T17:30:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 0.3213,
          period_from: '2023-04-01T09:00:00.000Z',
          period_to: '2023-04-01T18:00:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 0.1455,
          period_from: '2023-04-01T09:15:00.000Z',
          period_to: '2023-04-01T18:30:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 0.7134,
          period_from: '2023-04-01T09:30:00.000Z',
          period_to: '2023-04-01T19:00:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 0.722,
          period_from: '2023-04-01T09:45:00.000Z',
          period_to: '2023-04-01T19:30:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 1.3854,
          period_from: '2023-04-01T10:00:00.000Z',
          period_to: '2023-04-01T20:00:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 0.737,
          period_from: '2023-04-01T10:15:00.000Z',
          period_to: '2023-04-01T20:30:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 1.6096,
          period_from: '2023-04-01T10:30:00.000Z',
          period_to: '2023-04-01T21:00:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 0.9586,
          period_from: '2023-04-01T10:45:00.000Z',
          period_to: '2023-04-01T21:30:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 0.0492,
          period_from: '2023-04-01T11:00:00.000Z',
          period_to: '2023-04-01T22:00:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 1.5438,
          period_from: '2023-04-01T11:15:00.000Z',
          period_to: '2023-04-01T22:30:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 0.0925,
          period_from: '2023-04-01T11:30:00.000Z',
          period_to: '2023-04-01T23:00:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 0.4703,
          period_from: '2023-04-01T11:45:00.000Z',
          period_to: '2023-04-01T23:30:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 1.7601,
          period_from: '2023-04-01T12:00:00.000Z',
          period_to: '2023-04-02T00:00:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 1.5713,
          period_from: '2023-04-01T12:15:00.000Z',
          period_to: '2023-04-02T00:30:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 1.3152,
          period_from: '2023-04-01T12:30:00.000Z',
          period_to: '2023-04-02T01:00:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 0.8377,
          period_from: '2023-04-01T12:45:00.000Z',
          period_to: '2023-04-02T01:30:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 0.0777,
          period_from: '2023-04-01T13:00:00.000Z',
          period_to: '2023-04-02T02:00:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 0.7863,
          period_from: '2023-04-01T13:15:00.000Z',
          period_to: '2023-04-02T02:30:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 1.3433,
          period_from: '2023-04-01T13:30:00.000Z',
          period_to: '2023-04-02T03:00:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 0.5189,
          period_from: '2023-04-01T13:45:00.000Z',
          period_to: '2023-04-02T03:30:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 0.9462,
          period_from: '2023-04-01T14:00:00.000Z',
          period_to: '2023-04-02T04:00:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 1.7393,
          period_from: '2023-04-01T14:15:00.000Z',
          period_to: '2023-04-02T04:30:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 0.2469,
          period_from: '2023-04-01T14:30:00.000Z',
          period_to: '2023-04-02T05:00:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 1.6138,
          period_from: '2023-04-01T14:45:00.000Z',
          period_to: '2023-04-02T05:30:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 1.838,
          period_from: '2023-04-01T15:00:00.000Z',
          period_to: '2023-04-02T06:00:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 1.5172,
          period_from: '2023-04-01T15:15:00.000Z',
          period_to: '2023-04-02T06:30:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 0.5182,
          period_from: '2023-04-01T15:30:00.000Z',
          period_to: '2023-04-02T07:00:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 1.0618,
          period_from: '2023-04-01T15:45:00.000Z',
          period_to: '2023-04-02T07:30:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 0.1349,
          period_from: '2023-04-01T16:00:00.000Z',
          period_to: '2023-04-02T08:00:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 0.1506,
          period_from: '2023-04-01T16:15:00.000Z',
          period_to: '2023-04-02T08:30:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 1.3539,
          period_from: '2023-04-01T16:30:00.000Z',
          period_to: '2023-04-02T09:00:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 0.5135,
          period_from: '2023-04-01T16:45:00.000Z',
          period_to: '2023-04-02T09:30:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 1.6349,
          period_from: '2023-04-01T17:00:00.000Z',
          period_to: '2023-04-02T10:00:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 0.8898,
          period_from: '2023-04-01T17:15:00.000Z',
          period_to: '2023-04-02T10:30:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 0.222,
          period_from: '2023-04-01T17:30:00.000Z',
          period_to: '2023-04-02T11:00:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 1.7831,
          period_from: '2023-04-01T17:45:00.000Z',
          period_to: '2023-04-02T11:30:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 1.8392,
          period_from: '2023-04-01T18:00:00.000Z',
          period_to: '2023-04-02T12:00:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 1.2484,
          period_from: '2023-04-01T18:15:00.000Z',
          period_to: '2023-04-02T12:30:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 1.0055,
          period_from: '2023-04-01T18:30:00.000Z',
          period_to: '2023-04-02T13:00:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 0.6587,
          period_from: '2023-04-01T18:45:00.000Z',
          period_to: '2023-04-02T13:30:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 0.9444,
          period_from: '2023-04-01T19:00:00.000Z',
          period_to: '2023-04-02T14:00:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 1.2118,
          period_from: '2023-04-01T19:15:00.000Z',
          period_to: '2023-04-02T14:30:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 1.4761,
          period_from: '2023-04-01T19:30:00.000Z',
          period_to: '2023-04-02T15:00:00.000Z',
          type: 'real',
          adjustment_type: '',
        },
        {
          value: 1.1378,
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
      meter_installation_id: '65280788b595902eb2938178',
      meter_instalation: {
        _id: '65280788b595902eb2938178',
        meter_id: '65280788b595902eb2938170',
        installation_id: '65280788b595902eb2938174',
        created_at: '2023-10-12T14:49:44.351Z',
        installation_doc: {
          _id: '65280788b595902eb2938174',
          code: 'PT0002970034337218PA',
          created_at: '2023-10-12T14:49:44.333Z',
          installation_info: {
            service_type: 'surplus',
            utility_type: 'electricity',
          },
          status: 'active',
        },
        meter_doc: {
          _id: '65280788b595902eb2938170',
          meter_info: {
            serial_number: 'PT0002970034337218PA',
          },
          created_at: '2023-10-12T14:49:44.314Z',
        },
      },
    },
    timestamp: '2023-04-01T00:00:00.000Z',
    in_seconds: 86400,
    created_at: '2023-10-12T14:49:44.283Z',
  },
  ns: {
    db: 'mdm-dev',
    coll: 'mdm_measures_data_legacy',
  },
  documentKey: {
    _id: '65006067ef23957fe27faa30',
  },
};

async function createMeasureData() {
  const collection = await getDatabase(MDM_MEASURES_LAKE);
  const results = await collection.find().toArray();
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
  await createMeasureData();
}

async function getOrderedMeasureList() {
  /// Obtém desta lista, a ordenação pelo maior valor excedente até o menor (best value)
  const mdmMeasuresDataCollection = await getDatabase(MDM_MEASURES_DATA);
  const bestMeasureList = await mdmMeasuresDataCollection
    .find({
      'header.installation_code': CPE_POSITIVO,
      timestamp: moment('2023-04-01').toDate(),
    })
    .sort({ 'header.release_date': -1, 'header._id': -1 }) // Release date e ID
    .toArray();

  return bestMeasureList;
}

async function getMeasureBestValue(cpe) {
  const mdmMeasuresBestValuesCollection = await getDatabase(
    MDM_MEASURES_BEST_VALUES,
  );

  const mdmMeasuresBestValue = await mdmMeasuresBestValuesCollection.findOne({
    'header.installation_code': cpe,
  });

  return mdmMeasuresBestValue;
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
  it('Calcular best values', async () => {
    // Ação de chamada ao teste
    const handler = jest.fn(action);
    await handler(dataRequest);

    /// / a data result necessita estar alinhada a best values
    const bestMeasureList = await getOrderedMeasureList();
    const mdmMeasuresBestValue = await getMeasureBestValue(CPE_POSITIVO);
    // Precisa ter varios valores (inserções subsequentes)
    expect(bestMeasureList.length).toBeGreaterThan(1);
    // Deve existir destes valores o melhor valor
    expect(mdmMeasuresBestValue).not.toBeNull();
    expect(mdmMeasuresBestValue.total_measure_data_docs).toEqual(
      bestMeasureList.length,
    );
  });
};

// npm test -- ./test/unit/Trigger_mdm_measures_data.test.js
bootstrapDatabase('Trigger_mdm_measures_data', fnDescription, dataRequest);
