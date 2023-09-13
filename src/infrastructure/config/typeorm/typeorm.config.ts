import { registerAs } from '@nestjs/config';
import { config as dotenvConfig } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

dotenvConfig({ path: './env/local.env' });

const config = {
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
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
