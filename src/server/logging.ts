import { createLogger, transports, format } from 'winston';

const logFormat = format.combine(
  format.timestamp(),
  format.errors({ stack: true }),
  format.splat(),
  format.json()
);

export const debugLogger = createLogger({
  level: 'debug',
  format: logFormat,
  transports: [new transports.File({ filename: 'logs/debug.log' })]
});

export const securityLogger = createLogger({
  level: 'info',
  format: logFormat,
  transports: [new transports.File({ filename: 'logs/security.log' })]
});
