import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class drug {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name_drug: string;

  @Column()
  detail_drug: string;

  @Column()
  more_drug: string;

  @Column({ default: true })
  have_drug: boolean;
}