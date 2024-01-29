import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrewingMethode } from './brewing-methode.entity';
import { BrewingMethodeController } from './brewing-methode.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BrewingMethode])],
  controllers: [BrewingMethodeController],
})
export class BrewingMethodeModule {}
