import { Grind } from '../src/app/grind/grind.entity';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { registerAs } from '@nestjs/config';
import { Brewing } from '../src/app/brewing/brewing.entity';
import { BrewingMethod } from '../src/app/brewing-method/brewing-method.entity';
import { CoffeeBean } from '../src/app/coffee-bean/coffee-bean.entity';
import { BrewingCategory } from '../src/app/brewing-category/brewing-category.entity';
import { User } from '../src/app/auth/user.entity';

export default registerAs(
  'orm.config',
  (): TypeOrmModuleOptions => ({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [
      Grind,
      Brewing,
      BrewingMethod,
      CoffeeBean,
      BrewingCategory,
      User,
    ],
    synchronize: true,
  })
);
