import { IsNumber, Min } from 'class-validator';

export class GrindCreateDto {
  @IsNumber()
  grind: number;

  @IsNumber()
  @Min(1, { message: 'The weight of gram should contain atleast 1 gram.' })
  gram: number;
}
