import dotenv from 'dotenv';
dotenv.config();

export const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  dbType: process.env.DB_TYPE || 'sqlite',
  sqlitePath: process.env.DB_SQLITE_PATH || './acms.db',
  postgresURL: process.env.DB_PG_URL || '',
  mariadbURL: process.env.DB_MARIA_URL || '',
  jwtSecret: process.env.JWT_SECRET || '',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d',
  corsOrigin: process.env.CORS_ORIGIN || '*',
  mailProvider: process.env.MAIL_PROVIDER || 'smtp',
  smsProvider: process.env.SMS_PROVIDER || 'none',
  adminEmail: process.env.ADMIN_EMAIL || '',
};
export const isProduction = config.env === 'production';
export const isDevelopment = config.env === 'development';
export const isTest = config.env === 'test';
export const isDebug = config.env === 'debug';
export const isDocker = !!process.env.DOCKER;
export const isCloud = !!process.env.CLOUD_ENV;
export const isServerless = !!process.env.SERVERLESS;
export const isLocal = !isProduction && !isDevelopment && !isTest && !isDebug;
export const isCI = !!process.env.CI;
export const isFeatureEnabled = (feature: string): boolean => {
  return process.env[`FEATURE_${feature.toUpperCase()}`] === 'true';
};
export const getDatabaseConfig = () => {
  switch (config.dbType) {
    case 'postgres':
      return { url: config.postgresURL };
    case 'mariadb':
      return { url: config.mariadbURL };
    case 'sqlite':
    default:
      return { path: config.sqlitePath };
  }
};
export const getJwtConfig = () => {
  return {
    secret: config.jwtSecret,
    expiresIn: config.jwtExpiresIn,
  };
};
export const getMailConfig = () => {
  return {
    provider: config.mailProvider,
    adminEmail: config.adminEmail,
  };
};
export const getSmsConfig = () => {
  return {
    provider: config.smsProvider,
  };
};
export const getCorsConfig = () => {
  return {
    origin: config.corsOrigin,
    credentials: true,
  };
};
export const getServerConfig = () => {
  return {
    port: config.port,
    env: config.env,
    isProduction,
    isDevelopment,
    isTest,
    isDebug,
    isDocker,
    isCloud,
    isServerless,
    isLocal,
    isCI,
  };
};
export const getConfig = () => {
  return {
    ...getServerConfig(),
    database: getDatabaseConfig(),
    jwt: getJwtConfig(),
    mail: getMailConfig(),
    sms: getSmsConfig(),
    cors: getCorsConfig(),
  };
};
export const logConfig = () => {
  console.log('Current Configuration:', JSON.stringify(getConfig(), null, 2));
};

logConfig();
