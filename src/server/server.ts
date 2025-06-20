import express from 'express';
import cookieParser from 'cookie-parser';
import { serverPort } from './config';
import { setupMiddlewares } from './middleware';
import routes from './routes';
import { connectDB } from './configureDB';

async function main() {
  await connectDB();

  const app = express();

  app.use(cookieParser());
  setupMiddlewares(app);

  app.use('/api', routes);

  // Health check
  app.get('/health', (req, res) => res.status(200).send('OK'));

  app.listen(serverPort, () => {
    console.log(`AuroraCMS backend running on port ${serverPort}`);
  });
}

main().catch(err => {
  console.error('Server error:', err);
  process.exit(1);
});
