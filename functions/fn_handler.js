const winston = require('winston');
const _ = require('lodash');
const moment = require('moment-timezone');

const TOPIC_REPROCESS_FN = 'reprocess_function';
const LOG_NOTIFICATIONS = 'log_notifications';

function getIdFromTrigger(argumentsList) {
  return argumentsList[0].fullDocument._id;
}

const allowedRetryFunctions = [
  {
    name: 'Trigger_Process_req_data_requests',
  },
  {
    name: 'Trigger_mmd_activation_lake',
  },
  {
    name: 'Trigger_mdm_measures_lake',
  },
];

async function getDatabase(dbCollection) {
  return global.context.functions.execute('fn_get_database', dbCollection);
}

async function getLastNotification(content) {
  const collection = await getDatabase(LOG_NOTIFICATIONS);
  const notification = await collection.findOne({
    'content._id': content._id,
    topic: TOPIC_REPROCESS_FN,
    'content.fnName': content.fnName,
  });

  return notification;
}

async function saveLogNotification(content) {
  const notification = await getLastNotification(content);
  if (notification) return;

  await global.context.functions.execute(
    'f_create_log_notification',
    TOPIC_REPROCESS_FN,
    content
  );
}

async function createReprocessingLog(target, thisArg, argumentsList) {
  const retryFn = _.find(
    allowedRetryFunctions,
    (args) => args.name === target.name
  );
  if (!retryFn) return;

  const id = getIdFromTrigger(argumentsList);
  await saveLogNotification({
    _id: id,
    fnName: retryFn.name,
    args: argumentsList,
  });
}

const handler = {
  async apply(target, thisArg, argumentsList) {
    try {
      global.debug('Chamando função');
      return await target(...argumentsList);
    } catch (err) {
      global.error(`Exception occurred while executing function: ${err}`);
      await createReprocessingLog(target, thisArg, argumentsList);
      throw err;
    }
  },
};

function bootstrapLogger(fn) {
  const { createLogger, format, transports } = winston;
  const {
    combine,
    printf
  } = format;

  const myFormat = printf(
    ({
      level,
      message,
    }) => `${moment().toISOString()} [${fn.name}] ${level}: ${message}`
  );

  const logLevel = global.context.values.get('LOG_LEVEL');
  const logger = createLogger({
    level: logLevel,
    transports: [
      new transports.Console({
        format: combine(myFormat),
      }),
    ],
  });

  global.error = (text) => {
    logger.error(`${text}`);
  };

  global.debug = (text) => {
    logger.debug(`${text}`);
  };

  global.info = (text) => {
    logger.info(`${text}`);
  };

  global.warn = (text) => {
    logger.warn(`${text}`);
  };
}

function boostrapTimezone() {
  moment.tz.setDefault('Etc/GMT+0');
  // moment.tz.setDefault("Europe/Lisbon");
}

async function main(fn, ...args) {
  bootstrapLogger(fn);
  boostrapTimezone();
  const proxy = new Proxy(fn, handler);

  return proxy(...args);
}

// f_create_log_notification
exports = main;

if (typeof module !== 'undefined') {
  module.exports = main;
}
