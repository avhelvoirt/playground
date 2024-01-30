import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Brewing } from '../brewing/brewing.entity';

@Entity('brewing-category')
export class BrewingCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Brewing, (brewing) => brewing.brewingCategory, {
    cascade: true,
  })
  @JoinTable()
  brewings: Brewing[];
}
