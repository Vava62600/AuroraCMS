import express from 'express';
const router = express.Router();

router.get('/', (_req, res) => {
  res.json({ users: [] }); // Replace with actual DB logic
});

export default router;
export function registerUserRoutes(app: express.Express) {
  app.use('/api/v1/users', router);
}
