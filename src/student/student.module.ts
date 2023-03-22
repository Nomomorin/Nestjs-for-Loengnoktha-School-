import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { student } from './entities/student.entity';

@Module({
  imports:[TypeOrmModule.forFeature([student])],
  controllers: [StudentController],
  providers: [StudentService]
})
export class StudentModule {}
