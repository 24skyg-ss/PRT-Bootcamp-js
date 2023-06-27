//  console.log("Es la primera puerta");
//  console.log("Es la ultima puerta");

const winston = require('winston');

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.json(),
  //defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

function tryTypeof(val = []) {
    if(typeof val === 'Object') return val.push('Javascript');
    throw new Error("El valor debe ser de tipo Object.");
}

try  {
    let val = 'String';
    const val_2 = tryTypeof(val);
    console.log(val_2);
} catch (e) {
    logger.log("Error: ",e);
} 

logger.log('Error!');