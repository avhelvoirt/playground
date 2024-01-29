import { Entity, PrimaryColumn } from 'typeorm';

@Entity('brewingMethode')
export class BrewingMethode {
  @PrimaryColumn()
  name: string;
}
