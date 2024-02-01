import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrewingController } from './brewingController';
import { Brewing } from './brewing.entity';
import { BrewingService } from './brewing.service';

@Module({
  imports: [TypeOrmModule.forFeature([Brewing])],
  controllers: [BrewingController],
  providers: [BrewingService],
})
export class BrewingModule {}
