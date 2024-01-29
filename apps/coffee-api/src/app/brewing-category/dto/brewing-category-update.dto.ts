import { PartialType } from '@nestjs/mapped-types';
import { BrewingCategoryCreateDto } from './brewing-category-create.dto';

export class BrewingCategoryUpdateDto extends PartialType(
  BrewingCategoryCreateDto
) {
  //by default all values of brewingCategoryDTO will be optional.
}
