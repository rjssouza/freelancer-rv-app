const winston = require('winston');
const _ = require('lodash');
const moment = require('moment-timezone');
const path = require('path');

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
    printf,
  } = format;

  const myFormat = printf(
    (info) => `${moment().toISOString()} [${info.label}] ${info.level}: ${info.message} ${JSON.stringify(info.metadata) !== '{}' ? `| ${JSON.stringify(info.metadata)}` : ''}`,
  );

  const logLevel = global.context.values.get('LOG_LEVEL');
  const logger = createLogger({
    level: logLevel,
    format: combine(
      // format.label({ label: path.basename(process.mainModule.filename) }),
      format.label({ label: fn.name }),
      format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      format.metadata({ fillExcept: ['message', 'level', 'timestamp', 'label'] }),
    ),
    transports: [
      new transports.Console({
        format: format.combine(
          myFormat,
        ),
      }),
    ],
    exitOnError: false,
  });

  global.error = (text, object) => {
    logger.error(`${text}`, object);
  };

  global.debug = (text, object) => {
    logger.debug(`${text}`, object);
  };

  global.info = (text, object) => {
    logger.info(`${text}`, object);
  };

  global.warn = (text, object) => {
    logger.warn(`${text}`, object);
  };
}

function boostrapTimezone() {
  moment.tz.setDefault('Europe/Lisbon');
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
