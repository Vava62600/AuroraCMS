import cron from 'node-cron';
import { logger } from '../logging';

export function initializeScheduler() {
  logger.info('Initializing background task scheduler...');

  // Example: Clear expired sessions every hour
  cron.schedule('0 * * * *', () => {
    logger.info('Running scheduled session cleanup task');
    // TODO: session cleanup task here
  });
}