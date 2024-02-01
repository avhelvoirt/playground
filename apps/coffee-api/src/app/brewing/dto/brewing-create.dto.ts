import { IsNumber, IsString, Max } from 'class-validator';
import { BrewingMethode } from '../../brewing-methode/brewing-methode.entity';
import { CoffeeBean } from '../../coffee-bean/coffee-bean.entity';
import { Grind } from '../../grind/grind.entity';

export class BrewingCreateDto {
  @IsString()
  name: string;

  @IsString()
  brewingMethode: BrewingMethode;

  @IsNumber()
  coffeeBean: CoffeeBean;

  @IsNumber()
  grind: Grind;

  @IsNumber()
  shots: number;

  @IsNumber()
  waterTemp: number;

  @IsNumber()
  waterInML: number;

  @IsNumber()
  pullTime: number;

  @IsNumber()
  @Max(5)
  tasteExperience: number;

  @IsString()
  notes: string;
}
