import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { jwtSecret, tokenExpiration } from './config';
import { securityLogger } from './logger';

export interface JwtPayload {
  userId: string;
  deviceId: string;
  iat: number;
  exp: number;
}

export function generateToken(userId: string, deviceId: string): string {
  return jwt.sign({ userId, deviceId }, jwtSecret, { expiresIn: tokenExpiration });
}

export function verifyToken(token: string): JwtPayload | null {
  try {
    return jwt.verify(token, jwtSecret) as JwtPayload;
  } catch (err) {
    return null;
  }
}

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization || req.cookies.token;
  if (!authHeader) {
    return res.status(401).json({ error: 'Authentication required' });
  }

  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : authHeader;
  const payload = verifyToken(token);
  if (!payload) {
    securityLogger.info(`Invalid token access attempt from IP: ${req.ip}`);
    return res.status(401).json({ error: 'Invalid token' });
  }

  // Here you could check deviceId matches with user session deviceId stored in DB (not shown here)
  // For multi-device/token handling, implement device session store & invalidate tokens on device change

  (req as any).user = payload;
  next();
}
