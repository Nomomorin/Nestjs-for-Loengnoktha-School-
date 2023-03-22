import { Module } from '@nestjs/common';
import { DrugService } from './drug.service';
import { DrugController } from './drug.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { drug } from './entities/drug.entity';

@Module({
  imports: [TypeOrmModule.forFeature([drug])],
  controllers: [DrugController],
  providers: [DrugService]
})
export class DrugModule {}
