import { Router } from 'express';
import bcrypt from 'bcrypt';
import { generateToken } from '../server/auth';
import { prisma } from '../server/configureDB';
import { Request, Response } from 'express';

const router = Router();

router.post('/login', async (req: Request, res: Response) => {
  const { email, password, deviceId } = req.body;
  if (!email || !password || !deviceId) {
    return res.status(400).json({ error: 'Missing parameters' });
  }
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) return res.status(401).json({ error: 'Invalid credentials' });

  const token = generateToken(user.id, deviceId);

  // TODO: Save token or session for device management if needed

  res.cookie('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 7 * 24 * 3600 * 1000 // 7 days
  });
  res.json({ token, user: { id: user.id, email: user.email, roles: user.roles } });
});

router.post('/logout', (req: Request, res: Response) => {
  res.clearCookie('token');
  res.status(200).json({ message: 'Logged out' });
});

export default router;
