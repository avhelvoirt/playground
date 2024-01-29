import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('brewing-category')
export class BrewingCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
