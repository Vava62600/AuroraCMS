import { Router } from 'express';
import authRoutes from '../api/auth';
import userRoutes from '../api/users';
import siteRoutes from '../api/sites';
import paymentRoutes from '../api/payments';
import reservationRoutes from '../api/reservations';
import { authMiddleware } from './auth';

const router = Router();

router.use('/auth', authRoutes);
router.use('/users', authMiddleware, userRoutes);
router.use('/sites', authMiddleware, siteRoutes);
router.use('/payments', authMiddleware, paymentRoutes);
router.use('/reservations', authMiddleware, reservationRoutes);

export default router;
