import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class history {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  drugRecipient: string;

  @Column()
  illness: string;

  @Column()
  list_drug: string;

  @Column()
  nameDispenser: string;

  @Column()
  date: string;

  @Column()
  time: string;
}