import { PartialType } from '@nestjs/mapped-types';
import { CoffeeBeanCreateDto } from './coffee-bean-create.dto';

export class CoffeeBeanUpdateDto extends PartialType(CoffeeBeanCreateDto) {}
