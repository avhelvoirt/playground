import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('grind')
export class Grind {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  grind: number;

  @Column()
  gram: number;
}
