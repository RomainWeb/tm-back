import { registerAs } from '@nestjs/config';
import { config as dotenvConfig } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
import * as process from 'process';

dotenvConfig({ path: './env/local.env' });

const config = {
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: +process.env.DATABASE_PORT || 5433,
  username: process.env.DATABASE_USER || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'postgres',
  database: process.env.DATABASE_NAME || 'postgres',
  schema: process.env.DATABASE_SCHEMA || 'public',
  entities: ['src/infrastructure/entities/*.entity.ts'],
  migrationsRun: false,
  logging: true,
  migrationsTableName: 'migration',
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
  cli: {
    migrationsDir: 'src/migrations',
  },
};

console.log(config);

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
