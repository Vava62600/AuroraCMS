import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  res.json({ message: 'Reservations API endpoint (stub)' });
});

export default router;
