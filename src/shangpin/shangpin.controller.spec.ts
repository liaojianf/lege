import { Test, TestingModule } from '@nestjs/testing';
import { ShangpinController } from './shangpin.controller';

describe('Shangpin Controller', () => {
  let controller: ShangpinController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShangpinController],
    }).compile();

    controller = module.get<ShangpinController>(ShangpinController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
