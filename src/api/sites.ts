import { Router } from 'express';
import { prisma } from '../server/configureDB';
import { Request, Response } from 'express';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  // TODO: fetch sites accessible by user
  const sites = await prisma.site.findMany();
  res.json(sites);
});

// CRUD sites ...

export default router;
