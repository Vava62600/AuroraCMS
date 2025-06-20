import { Router } from 'express';

const router = Router();

router.post('/charge', async (req, res) => {
  // Intégrer Stripe/PayPal/crypto ici
  res.json({ status: 'Payment processed (stub)' });
});

export default router;
