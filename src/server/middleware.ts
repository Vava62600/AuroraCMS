import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { debugLogger, securityLogger } from './logger';

export function setupMiddlewares(app: express.Express) {
  app.use(cors({ origin: true, credentials: true }));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Logger HTTP requêtes (pour debug)
  app.use(morgan('combined', {
    stream: {
      write: (msg) => debugLogger.debug(msg.trim())
    }
  }));

  // Gestion des erreurs
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    debugLogger.error(err.stack || err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  });
}
