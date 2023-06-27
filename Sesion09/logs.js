//  Gestión de logs
const logger = require('./logger');

/*
// wiston npm
const winston = require('winston');

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.json(),
  //defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

//  npm start
*/

logger.log('Mensaje por consola');
logger.info('Mensaje informativo');
logger.debug('Mensaje de debug');
logger.warn('Mensaje de advertencia');
logger.error('Mensaje de error');

//module.exports = logger;