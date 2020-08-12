import { Test, TestingModule } from '@nestjs/testing';
import { YingxiaoController } from './yingxiao.controller';

describe('Yingxiao Controller', () => {
  let controller: YingxiaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YingxiaoController],
    }).compile();

    controller = module.get<YingxiaoController>(YingxiaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
