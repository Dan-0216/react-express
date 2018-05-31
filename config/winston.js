import winston from 'winston';
import config from "./config";
import "winston-daily-rotate-file";

winston.emitErrs = true;

const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.DailyRotateFile)({
      filename: process.cwd() + '/app_logs/log',
      handleException: true,
      json: true,
      colorize: false,
      datePattern: 'yyyyMMdd.',
      prepend: true,
      level: config.env !== 'production' ? 'debug' : 'info'
    }),
    new (winston.transports.Console)({
      json: true,
      colorize: true,
      handleException: true,
      level: 'debug'
    })
  ],
  exitOnError: false
});

export default logger;
