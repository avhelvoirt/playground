import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeeBean } from './coffee-bean.entity';
import { CoffeeBeanController } from './coffee-bean.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CoffeeBean])],
  controllers: [CoffeeBeanController],
})
export class CoffeeBeanModule {}
