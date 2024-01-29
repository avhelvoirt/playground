import { IsString } from 'class-validator';

export class BrewingCreateDto {
  @IsString()
  name: string;
}
