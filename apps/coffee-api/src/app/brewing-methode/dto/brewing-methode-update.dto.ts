import { PartialType } from '@nestjs/mapped-types';
import { BrewingMethodeCreateDto } from './brewing-methode-create.dto';

export class BrewingMethodeUpdateDto extends PartialType(
  BrewingMethodeCreateDto
) {}
