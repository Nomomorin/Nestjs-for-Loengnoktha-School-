import { Injectable } from '@nestjs/common';
import { CreateHistoryDto } from './dto/create-history.dto';
import { UpdateHistoryDto } from './dto/update-history.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { history } from './entities/history.entity';

@Injectable()
export class HistoryService {
  constructor(
    @InjectRepository(history)
    private usersRepository: Repository<history>,
  ) {}
  create(createHistoryDto: CreateHistoryDto) {
    return this.usersRepository.save(createHistoryDto)
  }

  findAll(): Promise<history[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<history> {
    return this.usersRepository.findOneBy({ id });
  }

  update(id: number, updateHistoryDto: UpdateHistoryDto) {
    return this.usersRepository.update(id,updateHistoryDto)
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
