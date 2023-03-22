import { Injectable } from '@nestjs/common';
import { CreateDrugDto } from './dto/create-drug.dto';
import { UpdateDrugDto } from './dto/update-drug.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { drug } from './entities/drug.entity';

@Injectable()
export class DrugService {
  constructor(
    @InjectRepository(drug)
    private usersRepository: Repository<drug>,
  ) {}
  
  create(createDrugDto: CreateDrugDto) {
    return this.usersRepository.save(createDrugDto)
  }

  findAll(): Promise<drug[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<drug> {
    return this.usersRepository.findOneBy({ id });
  }

  update(id: number, updateDrugDto: UpdateDrugDto) {
    return this.usersRepository.update(id,updateDrugDto)
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
