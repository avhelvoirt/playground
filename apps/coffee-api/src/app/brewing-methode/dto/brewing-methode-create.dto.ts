import { IsString } from 'class-validator';

export class BrewingMethodeCreateDto {
  @IsString()
  name: string;
}
