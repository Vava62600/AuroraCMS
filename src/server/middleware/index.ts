import { Request, Response, NextFunction } from 'express';
import { logger } from '../logging';

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  logger.error(err.stack || err);
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
}
export function notFoundHandler(req: Request, res: Response) {
  res.status(404).json({ error: 'Not Found' });
}
export function requestLogger(req: Request, res: Response, next: NextFunction) {
  logger.info(`${req.method} ${req.originalUrl}`);
  next();
}
export function securityLogger(req: Request, res: Response, next: NextFunction) {
  if (res.statusCode >= 400) {
    logger.warn(`${req.method} ${req.originalUrl} - ${res.statusCode}`);
  }
  next();
}
export function responseTimeLogger(req: Request, res: Response, next: NextFunction) {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    logger.info(`${req.method} ${req.originalUrl} - ${res.statusCode} (${duration}ms)`);
  });
  next();
}
export function rateLimitHandler(req: Request, res: Response, next: NextFunction) {
  // Implement rate limiting logic here if needed
  next();
}
export function corsHandler(req: Request, res: Response, next: NextFunction) {
  res.header('Access-Control-Allow-Origin', '*'); // Adjust as needed
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }
  next();
}
export function bodyParserHandler(req: Request, res: Response, next: NextFunction) {
  // Parse JSON bodies
  if (req.is('application/json')) {
    req.body = JSON.parse(req.body);
  }
  next();
}
export function cookieParserHandler(req: Request, res: Response, next: NextFunction) {
  // Parse cookies
  if (req.headers.cookie) {
    req.cookies = Object.fromEntries(req.headers.cookie.split('; ').map(cookie => cookie.split('=')));
  }
  next();
}
export function compressionHandler(req: Request, res: Response, next: NextFunction) {
  // Implement compression logic if needed
  next();
}
