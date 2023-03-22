import { Test, TestingModule } from '@nestjs/testing';
import { DrugController } from './drug.controller';
import { DrugService } from './drug.service';

describe('DrugController', () => {
  let controller: DrugController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DrugController],
      providers: [DrugService],
    }).compile();

    controller = module.get<DrugController>(DrugController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
