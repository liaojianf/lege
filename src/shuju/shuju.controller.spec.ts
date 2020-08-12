import { Test, TestingModule } from '@nestjs/testing';
import { ShujuController } from './shuju.controller';

describe('Shuju Controller', () => {
  let controller: ShujuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShujuController],
    }).compile();

    controller = module.get<ShujuController>(ShujuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
