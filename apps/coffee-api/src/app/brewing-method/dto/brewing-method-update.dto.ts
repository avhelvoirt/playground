import { PartialType } from '@nestjs/mapped-types';
import { BrewingMethodCreateDto } from './brewing-method-create.dto';

export class BrewingMethodUpdateDto extends PartialType(
  BrewingMethodCreateDto
) {}
