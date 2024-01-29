import { IsNumber } from 'class-validator';

export class BrewingCategoryCreateDto {
  @IsNumber()
  name: string;
}
