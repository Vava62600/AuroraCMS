import { Router } from 'express';
import { prisma } from '../server/configureDB';
import { Request, Response } from 'express';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  const users = await prisma.user.findMany({ select: { id: true, email: true, roles: true } });
  res.json(users);
});

// Ajout, modification, suppression, etc.
// ...

export default router;
