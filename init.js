const _ = require("lodash");
const process = require("process");
const { MongoClient } = require("mongodb");
const realm_config = require("./realm_config.json");

let _env = _.find(process.argv, function (args) {
  return args.split("=")[0] == "--env";
});

if (!_env) throw new Error("Env e obrigatorio");
_env = _env.split("=")[1];

const execute = async (fn, ...argArray) => {
  var callFn = require(`./functions/${fn}.js`);
  return callFn(...argArray);
};

const executeInternal = async (fn, ...argArray) => {
  var callFn = require(`./functions/${fn}.js`);
  callFn(...argArray).then(() => {
    setTimeout(function () {
      return process.exit(22);
    }, timeLimit);
  });
};

const functions = {
  execute,
};

const { values } =
  _env == "local"
    ? require(`./environments/no-environment.json`)
    : require(`./environments/${_env}.json`);

const services = [
  {
    nome: "development-mongodb-atlas",
    url: "mongodb+srv://dev:ZUZHktWkuNUu8rCR@freelancer-rv-db.dhb3chk.mongodb.net/?retryWrites=true&w=majority&appName=freelancer-rv-db",
  },
];
global.timeLimit = 2000;

global.context = {
  // whichever global context methods you want to mock.
  // 'services', 'functions', values, etc.
  app: {
    id: realm_config.app_id,
    clientAppId: realm_config.app_id,
    name: realm_config.name,
    projectId: "string",
    deployment: {
      model: realm_config.deployment_model,
      providerRegion: realm_config.provider_region,
    },
  },
  environment: {
    tag: _env,
    values: values,
  },
  values: {
    get: (valueName) => {
      const valueObj = require(`./values/${valueName}`);

      return valueObj.value;
    },
  },
  http: {
    post: async (options) => {
      return { statusCode: 200 };
    },
  },
  functions,
  services: {
    get: (serviceName) => {
      let client = _.find(services, function (service) {
        return service.nome === serviceName;
      });

      const mongoClient = new MongoClient(client.url);

      return mongoClient;
    },
  },
};

module.exports = executeInternal;
