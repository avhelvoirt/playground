import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeeBean } from './coffee-bean.entity';
import { CoffeeBeanController } from './coffee-bean.controller';
import { CoffeeBeanService } from './coffee-bean.service';

@Module({
  imports: [TypeOrmModule.forFeature([CoffeeBean])],
  controllers: [CoffeeBeanController],
  providers: [CoffeeBeanService],
})
export class CoffeeBeanModule {}
