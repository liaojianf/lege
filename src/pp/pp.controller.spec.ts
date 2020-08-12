import { Test, TestingModule } from '@nestjs/testing';
import { PpController } from './pp.controller';

describe('Pp Controller', () => {
  let controller: PpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpController],
    }).compile();

    controller = module.get<PpController>(PpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
