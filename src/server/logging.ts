import fs from 'fs';
import path from 'path';
import winston from 'winston';

const logDir = 'logs';
if (!fs.existsSync(logDir)) fs.mkdirSync(logDir);

const format = winston.format.combine(
  winston.format.timestamp(),
  winston.format.printf(({ timestamp, level, message }) => {
    return `${timestamp} [${level.toUpperCase()}]: ${message}`;
  })
);

export const logger = winston.createLogger({
  level: 'info',
  format,
  transports: [
    new winston.transports.File({ filename: path.join(logDir, 'app.log') }),
    new winston.transports.File({ filename: path.join(logDir, 'security.log'), level: 'warn' }),
    new winston.transports.Console()
  ],
});

logger.stream = {
  write: (message: string) => logger.info(message.trim()),
};
