import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { brewingController } from '../brewing/brewing.controller';

@Module({
  imports: [TypeOrmModule.forFeature()],
  controllers: [brewingController],
})
export class BrewingCategoryModule {}
