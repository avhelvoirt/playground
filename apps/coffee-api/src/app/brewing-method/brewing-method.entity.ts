import { Entity, PrimaryColumn } from 'typeorm';

@Entity('brewingMethod')
export class BrewingMethod {
  @PrimaryColumn()
  name: string;
}
