import { PartialType } from '@nestjs/mapped-types';
import { BrewingCreateDto } from './brewing-create.dto';

export class BrewingUpdateDto extends PartialType(BrewingCreateDto) {}
