import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrewingCategoryController } from './brewing-category.controller';
import { BrewingCategory } from './brewing-category.entity';
import { BrewingCategoryService } from './brewing-category.service';

@Module({
  imports: [TypeOrmModule.forFeature([BrewingCategory])],
  controllers: [BrewingCategoryController],
  providers: [BrewingCategoryService],
})
export class BrewingCategoryModule {}
