import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BrewingMethode } from '../brewing-methode/brewing-methode.entity';

@Entity('brewing')
export class Brewing {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => BrewingMethode, (brewingMethode) => brewingMethode.name)
  @JoinColumn()
  brewingMethode: BrewingMethode;
}
