import { IsString } from 'class-validator';

export class CoffeeBeanCreateDto {
  @IsString()
  name: string;

  @IsString()
  origins: string;
}
