import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrewingMethode } from './brewing-methode.entity';
import { BrewingMethodeController } from './brewing-methode.controller';
import { BrewingMethodeService } from './brewing-methode.service';

@Module({
  imports: [TypeOrmModule.forFeature([BrewingMethode])],
  controllers: [BrewingMethodeController],
  providers: [BrewingMethodeService],
})
export class BrewingMethodeModule {}
