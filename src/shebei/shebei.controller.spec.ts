import { Test, TestingModule } from '@nestjs/testing';
import { ShebeiController } from './shebei.controller';

describe('Shebei Controller', () => {
  let controller: ShebeiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShebeiController],
    }).compile();

    controller = module.get<ShebeiController>(ShebeiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
