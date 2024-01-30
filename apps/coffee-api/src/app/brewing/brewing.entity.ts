import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BrewingMethode } from '../brewing-methode/brewing-methode.entity';
import { CoffeeBean } from '../coffee-bean/coffee-bean.entity';
import { Grind } from '../grind/grind.entity';
import { BrewingCategory } from '../brewing-category/brewing-category.entity';

@Entity('brewing')
export class Brewing {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => BrewingMethode, (brewingMethode) => brewingMethode.name)
  @JoinColumn()
  brewingMethode: BrewingMethode;

  @ManyToOne(() => CoffeeBean, (coffeeBean) => coffeeBean.id)
  @JoinColumn()
  coffeeBean: CoffeeBean;

  @ManyToOne(() => Grind, (grind) => grind.id)
  @JoinColumn()
  grind: Grind;

  @Column()
  shots: number;

  @Column()
  waterTemp: number;

  @Column()
  waterInML: string;

  @Column()
  pullTime: string;

  @Column()
  tasteExperience: number;

  @Column()
  notes: string;

  @ManyToMany(
    () => BrewingCategory,
    (brewingCategory) => brewingCategory.brewings
  )
  brewingCategory: BrewingCategory;
}
