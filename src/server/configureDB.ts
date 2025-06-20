import { PrismaClient } from '@prisma/client';
import { dbConfig, isProduction } from './config';

let prisma: PrismaClient;

export async function connectDB(): Promise<PrismaClient> {
  if (prisma) return prisma;

  // Détermine le DSN selon la config
  let url: string;

  switch (dbConfig.type) {
    case 'postgres':
      url = `postgresql://${dbConfig.username}:${dbConfig.password}@${dbConfig.host}:${dbConfig.port}/${dbConfig.database}`;
      break;
    case 'mariadb':
      url = `mysql://${dbConfig.username}:${dbConfig.password}@${dbConfig.host}:${dbConfig.port}/${dbConfig.database}`;
      break;
    case 'sqlite':
    default:
      url = `file:${dbConfig.storage}?mode=rw`;
      break;
  }

  prisma = new PrismaClient({
    datasources: {
      db: { url }
    },
    log: isProduction ? [] : ['query', 'info', 'warn', 'error']
  });

  await prisma.$connect();
  return prisma;
}

export { prisma };
