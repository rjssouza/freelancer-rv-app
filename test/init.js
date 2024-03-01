/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-undef */
const _ = require('lodash');
const process = require('process');
const { MongoMemoryServer } = require('mongodb-memory-server');
const { MongoClient } = require('mongodb');
const realmConfig = require('../realm_config.json');

const _env = 'local';
// const _env = 'development';

// This will create an new instance of "MongoMemoryServer" and automatically start it
const execute = async (fn, ...argArray) => {
  const callFn = require(`../functions/${fn}.js`);
  return callFn(...argArray);
};

const executeInternal = async (fn, ...argArray) => {
  const callFn = require(`../functions/${fn}.js`);
  callFn(...argArray).then(() => {
    setTimeout(() => process.exit(0), timeLimit);
  });
};

const functions = {
  execute,
};

const { values } = _env === 'local'
  ? require('../environments/no-environment.json')
  : require(`../environments/${_env}.json`);

global.timeLimit = 2000;

let mongod;

beforeAll(async () => {
  mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();
  // const uri = 'mongodb://localhost:27017/';
  const services = [
    {
      nome: 'local-mongodb-atlas',
      url: uri,
    },
    {
      nome: 'development-mongodb-atlas',
      url: 'mongodb+srv://robson:vGBwkwJHdx71knjN@mongodb-mdm-dev.ceszd.mongodb.net/?retryWrites=true&w=majority',
    },
    {
      nome: 'qa-mongodb-atlas',
      url: 'mongodb+srv://robson:vGBwkwJHdx71knjN@mongodb-mdm-tst.ceszd.mongodb.net/?retryWrites=true&w=majority',
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
        const valueObj = require(`../values/${valueName}`);

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
});

// removes context from global namespace after each test
afterAll(async () => {
  await mongod.stop();
  delete global.context;
});

afterEach(async () => {
  jest.clearAllMocks();
  jest.resetAllMocks();
});

function mockBasicFunctions(fn, fnExecution) {
  const mockPath = `../functions/${fn}`;
  jest.mock(mockPath);
  const result = require(mockPath);
  if (fnExecution) {
    result.mockImplementation(fnExecution);
  }

  return result;
}

function mockGetDatabase() {
  const fGetDatabase = mockBasicFunctions(
    'f_get_database',
    async (dbCollection) => {
      const serviceName = context.environment.tag === 'production'
        ? 'mongodb-atlas'
        : `${context.environment.tag}-mongodb-atlas`;
      const dbName = context.values.get('DATABASE');
      const collection = {
        name: dbCollection,
        col: context.services
          .get(serviceName)
          .db(dbName)
          .collection(dbCollection),
      };
      return collection.col;
    },
  );

  return fGetDatabase;
}

function mockGetDatabaseRead() {
  const fGetDatabase = mockBasicFunctions(
    'f_get_database',
    async (dbCollection) => {
      const serviceName = context.environment.tag === 'production'
        ? 'mongodb-atlas'
        : `${context.environment.tag}-mongodb-atlas`;
      const dbName = context.values.get('DATABASE');
      const collection = {
        name: dbCollection,
        col: context.services
          .get(serviceName)
          .db(dbName)
          .collection(dbCollection),
      };

      collection.col.insertMany = jest.fn();
      collection.col.insertOne = jest.fn();
      collection.col.findOneAndUpdate = jest.fn();
      collection.col.updateOne = jest.fn();

      return collection.col;
    },
  );

  return fGetDatabase;
}

const functionMocks = {
  mockBasicFunctions,
  f_get_database: mockGetDatabase,
  f_handler: () => mockBasicFunctions('f_handler'),
};

const bootstrap = (fnName, fnDescription, ...argArray) => {
  describe(fnName, () => {
    const action = async (...argArrays) => {
      const callFn = require(`../functions/${fnName}.js`);
      return callFn(...argArrays);
    };

    fnDescription(action);

    it('Deve chamar a f_handler', async () => {
      const handler = jest.fn(action);
      const fHandler = functionMocks.f_handler();
      await handler(...argArray);

      expect(fHandler).toHaveBeenCalledTimes(1);
    });
  });
};

const bootstrapDatabase = (fnName, fnDescription, ...argArray) => {
  const fnn = (action) => {
    fnDescription(action);

    it('Deve chamar a f_get_database', async () => {
      const httpMock = jest.fn(() => ({ statusCode: 200 }));
      global.context.http.post = httpMock;

      const handler = jest.fn(action);
      const fGetDatabase = mockGetDatabaseRead();
      await handler(...argArray);

      expect(fGetDatabase).toHaveBeenCalled();
    });
  };

  bootstrap(fnName, fnn, argArray);
};

const getDatabase = async (dbCollection) => context.functions.execute('f_get_database', dbCollection);

module.exports = {
  executeInternal,
  bootstrap,
  bootstrapDatabase,
  getDatabase,
  functionMocks,
};
