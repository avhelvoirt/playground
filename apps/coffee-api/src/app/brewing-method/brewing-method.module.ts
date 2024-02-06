import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrewingMethod } from './brewing-method.entity';
import { BrewingMethodController } from './brewing-method.controller';
import { BrewingMethodService } from './brewing-method.service';

@Module({
  imports: [TypeOrmModule.forFeature([BrewingMethod])],
  controllers: [BrewingMethodController],
  providers: [BrewingMethodService],
})
export class BrewingMethodModule {}
