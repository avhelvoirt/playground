import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrewingCategoryController } from './brewing-category.controller';
import { BrewingCategory } from './brewing-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BrewingCategory])],
  controllers: [BrewingCategoryController],
})
export class BrewingCategoryModule {}
