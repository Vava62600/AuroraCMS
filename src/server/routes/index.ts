import { Express } from 'express';
import authRoutes from './routes.auth';
import userRoutes from './routes.users';
import siteRoutes from './routes.sites';
import pluginRoutes from './routes.plugins';
import roleRoutes from './routes.roles';

export default function registerRoutes(app: Express) {
  app.use('/api/v1/auth', authRoutes);
  app.use('/api/v1/users', userRoutes);
  app.use('/api/v1/sites', siteRoutes);
  app.use('/api/plugins', pluginRoutes);
  app.use('/api/v1/roles', roleRoutes);
}