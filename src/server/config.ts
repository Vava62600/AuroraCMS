import dotenv from 'dotenv';
dotenv.config();

export interface DBConfig {
  type: 'postgres' | 'mariadb' | 'sqlite';
  host?: string;
  port?: number;
  username?: string;
  password?: string;
  database: string;
  storage?: string; // pour sqlite path
}

export const dbConfig: DBConfig = {
  type: process.env.DB_TYPE as any || 'sqlite',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : undefined,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME || 'auroracms',
  storage: process.env.DB_STORAGE || './data/sqlite.db'
};

export const serverPort = Number(process.env.PORT) || 3000;

export const jwtSecret = process.env.JWT_SECRET || 'supersecretkeychangeit';

export const tokenExpiration = '7d'; // peut être modifié (max 30j)

export const isProduction = process.env.NODE_ENV === 'production';
