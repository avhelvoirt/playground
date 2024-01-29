import { Grind } from '../src/app/grind/grind.entity';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { registerAs } from '@nestjs/config';
import { Brewing } from '../src/app/brewing/brewing.entity';
import { BrewingMethode } from '../src/app/brewing-methode/brewing-methode.entity';

export default registerAs(
  'orm.config',
  (): TypeOrmModuleOptions => ({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Grind, Brewing, BrewingMethode],
    synchronize: true,
  })
);
