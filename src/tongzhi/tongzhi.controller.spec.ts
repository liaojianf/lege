import { Test, TestingModule } from '@nestjs/testing';
import { TongzhiController } from './tongzhi.controller';

describe('Tongzhi Controller', () => {
  let controller: TongzhiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TongzhiController],
    }).compile();

    controller = module.get<TongzhiController>(TongzhiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
