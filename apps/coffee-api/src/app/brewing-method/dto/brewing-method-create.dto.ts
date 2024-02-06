import { IsString } from 'class-validator';

export class BrewingMethodCreateDto {
  @IsString()
  name: string;
}
