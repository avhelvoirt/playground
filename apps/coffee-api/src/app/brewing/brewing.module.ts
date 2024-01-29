import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrewingController } from './brewingController';
import { Brewing } from './brewing.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Brewing])],
  controllers: [BrewingController],
})
export class BrewingModule {}
