const winston = require('winston');
const _ = require('lodash');
const moment = require('moment-timezone');

const handler = {
  async apply(target, thisArg, argumentsList) {
    try {
      global.debug('Chamando função');
      return await target(...argumentsList);
    } catch (err) {
      global.error(`Exception occurred while executing function: ${err}`);
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
  moment.tz.setDefault("Europe/Lisbon");
}

async function main(fn, ...args) {
  bootstrapLogger(fn);
  boostrapTimezone();
  const proxy = new Proxy(fn, handler);

  return proxy(...args);
}

// fn_handler
exports = main;

if (typeof module !== 'undefined') {
  module.exports = main;
}
