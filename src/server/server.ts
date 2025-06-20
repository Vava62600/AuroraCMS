import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import csurf from 'csurf';

import { registerRoutes } from './routes';
import { errorHandler } from './middleware';
import { initializeDatabase } from './database';
import { initializeScheduler } from './scheduler';
import { logger } from './logging';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Security HTTP headers
app.use(helmet());

// Enable CORS with defaults or based on config
app.use(cors({ origin: process.env.CORS_ORIGIN || '*', credentials: true }));

// Compression middleware
app.use(compression());

// Parse JSON and cookies
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(csurf({ cookie: true }));

// Request logging
app.use(morgan('combined', { stream: logger.stream }));

// Basic rate limiting
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100,
    message: 'Too many requests from this IP, please try again later.'
  })
);

// Initialize database
initializeDatabase()
  .then(() => {
    logger.info('Database connection successful');
  })
  .catch((err) => {
    logger.error('Database connection failed:', err);
    process.exit(1);
  });

// Initialize background tasks / cron jobs
initializeScheduler();

// Register API + internal routes
registerRoutes(app);

// Global error handler
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  logger.info(`AuroraCMS backend is running on port ${PORT}`);
});
