import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('brewing-cattegory')
export class BrewingCattegory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
