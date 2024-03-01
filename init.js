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
  f_get_database: require('./functions/f_get_database'),
};
const { values } = _env === 'local'
  ? require('./environments/no-environment.json')
  : require(`./environments/${_env}.json`);

const services = [
  {
    nome: 'development-mongodb-atlas',
    url: 'mongodb+srv://dev:ZUZHktWkuNUu8rCR@freelancer-rv-db.dhb3chk.mongodb.net/?retryWrites=true&w=majority&appName=freelancer-rv-db',
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
