import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_student: number;

  @Column()
  drug_allergy: string;

  @Column()
  name: string;

  @Column()
  sex: string;

  @Column()
  level: string;

  @Column()
  blood_type: string;

  @Column()
  more: string;
}