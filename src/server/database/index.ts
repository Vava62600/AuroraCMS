import * as config from '../../config'; // adapte selon ton projet
import { logger } from '../logging';

export function initializeDatabase() {
  const dbType = config.dbType;
  logger.info(`Initializing ${dbType} database...`);

  switch (dbType) {
    case 'sqlite':
      return import('./sqlite').then((mod) => mod.initSQLite());
    case 'postgres':
      return import('./postgres').then((mod) => mod.initPostgres());
    case 'mariadb':
      return import('./mariadb').then((mod) => mod.initMariaDB());
    default:
      throw new Error(`Unsupported DB type: ${dbType}`);
  }
}
export async function closeDatabase() {
  const dbType = config.dbType;
  logger.info(`Closing ${dbType} database connection...`);

  switch (dbType) {
    case 'sqlite':
      return import('./sqlite').then((mod) => mod.closeSQLite());
    case 'postgres':
      return import('./postgres').then((mod) => mod.closePostgres());
    case 'mariadb':
      return import('./mariadb').then((mod) => mod.closeMariaDB());
    default:
      throw new Error(`Unsupported DB type: ${dbType}`);
  }
}
export async function resetDatabase() {
  const dbType = config.dbType;
  logger.info(`Resetting ${dbType} database...`);

  switch (dbType) {
    case 'sqlite':
      return import('./sqlite').then((mod) => mod.resetSQLite());
    case 'postgres':
      return import('./postgres').then((mod) => mod.resetPostgres());
    case 'mariadb':
      return import('./mariadb').then((mod) => mod.resetMariaDB());
    default:
      throw new Error(`Unsupported DB type: ${dbType}`);
  }
}
export async function migrateDatabase() {
  const dbType = config.dbType;
  logger.info(`Migrating ${dbType} database...`);

  switch (dbType) {
    case 'sqlite':
      return import('./sqlite').then((mod) => mod.migrateSQLite());
    case 'postgres':
      return import('./postgres').then((mod) => mod.migratePostgres());
    case 'mariadb':
      return import('./mariadb').then((mod) => mod.migrateMariaDB());
    default:
      throw new Error(`Unsupported DB type: ${dbType}`);
  }
}
export async function seedDatabase() {
  const dbType = config.dbType;
  logger.info(`Seeding ${dbType} database...`);

  switch (dbType) {
    case 'sqlite':
      return import('./sqlite').then((mod) => mod.seedSQLite());
    case 'postgres':
      return import('./postgres').then((mod) => mod.seedPostgres());
    case 'mariadb':
      return import('./mariadb').then((mod) => mod.seedMariaDB());
    default:
      throw new Error(`Unsupported DB type: ${dbType}`);
  }
}
export async function backupDatabase() {
  const dbType = config.dbType;
  logger.info(`Backing up ${dbType} database...`);

  switch (dbType) {
    case 'sqlite':
      return import('./sqlite').then((mod) => mod.backupSQLite());
    case 'postgres':
      return import('./postgres').then((mod) => mod.backupPostgres());
    case 'mariadb':
      return import('./mariadb').then((mod) => mod.backupMariaDB());
    default:
      throw new Error(`Unsupported DB type: ${dbType}`);
  }
}
export async function restoreDatabase() {
  const dbType = config.dbType;
  logger.info(`Restoring ${dbType} database...`);

  switch (dbType) {
    case 'sqlite':
      return import('./sqlite').then((mod) => mod.restoreSQLite());
    case 'postgres':
      return import('./postgres').then((mod) => mod.restorePostgres());
    case 'mariadb':
      return import('./mariadb').then((mod) => mod.restoreMariaDB());
    default:
      throw new Error(`Unsupported DB type: ${dbType}`);
  }
}
export async function testDatabaseConnection() {
  const dbType = config.dbType;
  logger.info(`Testing ${dbType} database connection...`);

  switch (dbType) {
    case 'sqlite':
      return import('./sqlite').then((mod) => mod.testSQLiteConnection());
    case 'postgres':
      return import('./postgres').then((mod) => mod.testPostgresConnection());
    case 'mariadb':
      return import('./mariadb').then((mod) => mod.testMariaDBConnection());
    default:
      throw new Error(`Unsupported DB type: ${dbType}`);
  }
}
export async function getDatabaseStatus() {
  const dbType = config.dbType;
  logger.info(`Getting status of ${dbType} database...`);

  switch (dbType) {
    case 'sqlite':
      return import('./sqlite').then((mod) => mod.getSQLiteStatus());
    case 'postgres':
      return import('./postgres').then((mod) => mod.getPostgresStatus());
    case 'mariadb':
      return import('./mariadb').then((mod) => mod.getMariaDBStatus());
    default:
      throw new Error(`Unsupported DB type: ${dbType}`);
  }
}
export async function getDatabaseInfo() {
  const dbType = config.dbType;
  logger.info(`Getting info for ${dbType} database...`);

  switch (dbType) {
    case 'sqlite':
      return import('./sqlite').then((mod) => mod.getSQLiteInfo());
    case 'postgres':
      return import('./postgres').then((mod) => mod.getPostgresInfo());
    case 'mariadb':
      return import('./mariadb').then((mod) => mod.getMariaDBInfo());
    default:
      throw new Error(`Unsupported DB type: ${dbType}`);
  }
}
export async function getDatabaseSchema() {
  const dbType = config.dbType;
  logger.info(`Getting schema for ${dbType} database...`);

  switch (dbType) {
    case 'sqlite':
      return import('./sqlite').then((mod) => mod.getSQLiteSchema());
    case 'postgres':
      return import('./postgres').then((mod) => mod.getPostgresSchema());
    case 'mariadb':
      return import('./mariadb').then((mod) => mod.getMariaDBSchema());
    default:
      throw new Error(`Unsupported DB type: ${dbType}`);
  }
}
export async function getDatabaseTables() {
  const dbType = config.dbType;
  logger.info(`Getting tables for ${dbType} database...`);

  switch (dbType) {
    case 'sqlite':
      return import('./sqlite').then((mod) => mod.getSQLiteTables());
    case 'postgres':
      return import('./postgres').then((mod) => mod.getPostgresTables());
    case 'mariadb':
      return import('./mariadb').then((mod) => mod.getMariaDBTables());
    default:
      throw new Error(`Unsupported DB type: ${dbType}`);
  }
}
export async function getDatabaseQueries() {
  const dbType = config.dbType;
  logger.info(`Getting queries for ${dbType} database...`);
  switch (dbType) {
    case 'sqlite':
      return import('./sqlite').then((mod) => mod.getSQLiteQueries());
    case 'postgres':
      return import('./postgres').then((mod) => mod.getPostgresQueries());
    case 'mariadb':
      return import('./mariadb').then((mod) => mod.getMariaDBQueries());
    default:
      throw new Error(`Unsupported dbType: ${dbType}`);
  }
}
export async function getDatabaseTransactions() {
  const dbType = config.dbType;
  logger.info(`Getting transactions for ${dbType} database...`);

  switch (dbType) {
    case 'sqlite':
      return import('./sqlite').then((mod) => mod.getSQLiteTransactions());
    case 'postgres':
      return import('./postgres').then((mod) => mod.getPostgresTransactions());
    case 'mariadb':
      return import('./mariadb').then((mod) => mod.getMariaDBTransactions());
    default:
      throw new Error(`Unsupported DB type: ${dbType}`);
  }
}
export async function getDatabaseUsers() {
  const dbType = config.dbType;
  logger.info(`Getting users for ${dbType} database...`);

  switch (dbType) {
    case 'sqlite':
      return import('./sqlite').then((mod) => mod.getSQLiteUsers());
    case 'postgres':
      return import('./postgres').then((mod) => mod.getPostgresUsers());
    case 'mariadb':
      return import('./mariadb').then((mod) => mod.getMariaDBUsers());
    default:
      throw new Error(`Unsupported DB type: ${dbType}`);
  }
}
export async function getDatabaseRoles() {
  const dbType = config.dbType;
  logger.info(`Getting roles for ${dbType} database...`);

  switch (dbType) {
    case 'sqlite':
      return import('./sqlite').then((mod) => mod.getSQLiteRoles());
    case 'postgres':
      return import('./postgres').then((mod) => mod.getPostgresRoles());
    case 'mariadb':
      return import('./mariadb').then((mod) => mod.getMariaDBRoles());
    default:
      throw new Error(`Unsupported DB type: ${dbType}`);
  }
}
export async function getDatabasePermissions() {
  const dbType = config.dbType;
  logger.info(`Getting permissions for ${dbType} database...`);

  switch (dbType) {
    case 'sqlite':
      return import('./sqlite').then((mod) => mod.getSQLitePermissions());
    case 'postgres':
      return import('./postgres').then((mod) => mod.getPostgresPermissions());
    case 'mariadb':
      return import('./mariadb').then((mod) => mod.getMariaDBPermissions());
    default:
      throw new Error(`Unsupported DB type: ${dbType}`);
  }
}
export async function getDatabaseIndexes() {
  const dbType = config.dbType;
  logger.info(`Getting indexes for ${dbType} database...`);

  switch (dbType) {
    case 'sqlite':
      return import('./sqlite').then((mod) => mod.getSQLiteIndexes());
    case 'postgres':
      return import('./postgres').then((mod) => mod.getPostgresIndexes());
    case 'mariadb':
      return import('./mariadb').then((mod) => mod.getMariaDBIndexes());
    default:
      throw new Error(`Unsupported DB type: ${dbType}`);
  }
}
export async function getDatabaseViews() {
  const dbType = config.dbType;
  logger.info(`Getting views for ${dbType} database...`);

  switch (dbType) {
    case 'sqlite':
      return import('./sqlite').then((mod) => mod.getSQLiteViews());
    case 'postgres':
      return import('./postgres').then((mod) => mod.getPostgresViews());
    case 'mariadb':
      return import('./mariadb').then((mod) => mod.getMariaDBViews());
    default:
      throw new Error(`Unsupported DB type: ${dbType}`);
  }
}
export async function getDatabaseTriggers() {
  const dbType = config.dbType;
  logger.info(`Getting triggers for ${dbType} database...`);

  switch (dbType) {
    case 'sqlite':
      return import('./sqlite').then((mod) => mod.getSQLiteTriggers());
    case 'postgres':
      return import('./postgres').then((mod) => mod.getPostgresTriggers());
    case 'mariadb':
      return import('./mariadb').then((mod) => mod.getMariaDBTriggers());
    default:
      throw new Error(`Unsupported DB type: ${dbType}`);
  }
}
export async function getDatabaseLogs() {
  const dbType = config.dbType;
  logger.info(`Getting logs for ${dbType} database...`);

  switch (dbType) {
    case 'sqlite':
      return import('./sqlite').then((mod) => mod.getSQLiteLogs());
    case 'postgres':
      return import('./postgres').then((mod) => mod.getPostgresLogs());
    case 'mariadb':
      return import('./mariadb').then((mod) => mod.getMariaDBLogs());
    default:
      throw new Error(`Unsupported DB type: ${dbType}`);
  }
}
export async function getDatabasePerformance() {
  const dbType = config.dbType;
  logger.info(`Getting performance metrics for ${dbType} database...`);

  switch (dbType) {
    case 'sqlite':
      return import('./sqlite').then((mod) => mod.getSQLitePerformance());
    case 'postgres':
      return import('./postgres').then((mod) => mod.getPostgresPerformance());
    case 'mariadb':
      return import('./mariadb').then((mod) => mod.getMariaDBPerformance());
    default:
      throw new Error(`Unsupported DB type: ${dbType}`);
  }
}

someAsyncFunction()
  .then(result => { /* ... */ })
  .catch(error => { console.error(error); });
