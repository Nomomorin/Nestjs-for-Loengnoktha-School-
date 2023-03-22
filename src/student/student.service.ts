import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { student } from './entities/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(student)
    private usersRepository: Repository<student>,
  ) {}

  create(createStudentDto: CreateStudentDto) {
    return this.usersRepository.save(createStudentDto)
  }

  findAll(): Promise<student[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<student> {
    return this.usersRepository.findOneBy({ id });
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return this.usersRepository.update(id,updateStudentDto)
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
