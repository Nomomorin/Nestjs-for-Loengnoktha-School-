import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { test } from './entities/test.entity'
@Module({
  imports: [TypeOrmModule.forFeature([test])],
  controllers: [TestController],
  providers: [TestService]
})
export class TestModule {}
