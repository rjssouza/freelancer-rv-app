/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
const _ = require('lodash');
const process = require('process');
const { MongoClient } = require('mongodb');
const realmConfig = require('./realm_config.json');

let _env = _.find(process.argv, (args) => args.split('=')[0] === '--env');

if (!_env) throw new Error('Env e obrigatorio');
[, _env] = _env.split('=');

global.timeLimit = 2000;

const execute = async (fn, ...argArray) => {
  const callFn = require(`./functions/${fn}`);
  return callFn(...argArray);
};

const executeInternal = async (fn, ...argArray) => {
  const callFn = require(`./functions/${fn}`);
  return callFn(...argArray).then(() => {
    setTimeout(() => process.exit(0), global.timeLimit);
  });
};

const main = async (fn) => {
  fn().then(() => {
    setTimeout(() => process.exit(0), global.timeLimit);
  });
};

const functions = {
  execute,
  f_create_log_notification: require('./functions/f_create_log_notification'),
  f_get_database: require('./functions/f_get_database'),
  f_meter_installation: require('./functions/f_meter_installation'),
  f_reset_database: require('./functions/f_reset_database'),
  Http_Create_Measure_Dummy: require('./functions/Http_Create_Measure_Dummy'),
  Http_get_measures_data: require('./functions/Http_get_measures_data'),
  Trigger_log_notifications: require('./functions/Trigger_log_notifications'),
  Trigger_mdm_measures_lake: require('./functions/Trigger_mdm_measures_lake'),
  Trigger_mmd_activation_lake: require('./functions/Trigger_mmd_activation_lake'),
  Trigger_Process_log_notifications: require('./functions/Trigger_Process_log_notifications'),
  Trigger_Process_req_data_requests: require('./functions/Trigger_Process_req_data_requests'),
  Trigger_req_data_request: require('./functions/Trigger_req_data_request'),
  Trigger_Schedule_log_notifications: require('./functions/Trigger_Schedule_log_notifications'),
};
const { values } = _env === 'local'
  ? require('./environments/no-environment.json')
  : require(`./environments/${_env}.json`);

const services = [
  {
    nome: 'test-mongodb-atlas',
    url: 'mongodb+srv://robson:vGBwkwJHdx71knjN@mongodb-mdm-tst.ceszd.mongodb.net/?retryWrites=true&w=majority',
  },
  {
    nome: 'development-mongodb-atlas',
    url: 'mongodb+srv://robson:vGBwkwJHdx71knjN@mongodb-mdm-dev.ceszd.mongodb.net/?retryWrites=true&w=majority',
  },
  {
    nome: 'qa-mongodb-atlas',
    url: 'mongodb+srv://robson:vGBwkwJHdx71knjN@mongodb-mdm-tst.ceszd.mongodb.net/?retryWrites=true&w=majority',
  },
  {
    nome: 'mongodb-atlas',
    url: 'mongodb+srv://robson:vGBwkwJHdx71knjN@mongodb-mdm-prd.ceszd.mongodb.net/?retryWrites=true&w=majority',
  },
  {
    nome: 'local-mongodb-atlas',
    url: 'mongodb://localhost:27017/',
  },
];

global.context = {
  // whichever global context methods you want to mock.
  // 'services', 'functions', values, etc.
  app: {
    id: realmConfig.app_id,
    clientAppId: realmConfig.app_id,
    name: realmConfig.name,
    projectId: 'string',
    deployment: {
      model: realmConfig.deployment_model,
      providerRegion: realmConfig.provider_region,
    },
  },
  environment: {
    tag: _env,
    values,
  },
  values: {
    get: (valueName) => {
      const valueObj = require(`./values/${valueName}`);

      return valueObj.value;
    },
  },
  http: {
    post: async () => ({ statusCode: 200 }),
  },
  functions,
  services: {
    get: (serviceName) => {
      const client = _.find(services, (service) => service.nome === serviceName);

      const mongoClient = new MongoClient(client.url);

      return mongoClient;
    },
  },
};

const getDatabase = async (dbCollection) => functions.execute('f_get_database', dbCollection);

const getResultsFromAggregate = async (collectionName, aggregate) => {
  const collection = await getDatabase(collectionName);
  const result = await collection.aggregate(aggregate, {
    allowDiskUse: true,
  }).toArray();

  return result;
};

const moveToAnother = async (results, collectionName, deleteFilter) => {
  if (results == null || results.length <= 0) {
    return;
  }
  const collection = await getDatabase(collectionName);
  await collection.deleteMany(deleteFilter);
  await collection.insertMany(results);
};

module.exports = {
  execute: executeInternal,
  getDatabase,
  main,
  getResultsFromAggregate,
  moveToAnother
};
