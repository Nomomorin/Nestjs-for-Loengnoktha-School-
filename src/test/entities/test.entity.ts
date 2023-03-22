import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class test {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  N: string;
}