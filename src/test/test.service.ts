import { Injectable } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { test } from './entities/test.entity';
@Injectable()
export class TestService {
  constructor(
    @InjectRepository(test)
    private usersRepository: Repository<test>,
  ) {}
  create(createTestDto: CreateTestDto) {
    return 'This action adds a new test';
  }

  findAll(): Promise<test[]> {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} test`;
  }

  update(id: number, updateTestDto: UpdateTestDto) {
    return `This action updates a #${id} test`;
  }

  remove(id: number) {
    return `This action removes a #${id} test`;
  }
}
