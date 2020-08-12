import { Test, TestingModule } from '@nestjs/testing';
import { ShanghuController } from './shanghu.controller';

describe('Shanghu Controller', () => {
  let controller: ShanghuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShanghuController],
    }).compile();

    controller = module.get<ShanghuController>(ShanghuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
