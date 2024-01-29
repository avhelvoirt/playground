import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('coffeeBean')
export class CoffeeBean {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  origins: string;
}
