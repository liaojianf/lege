import { Test, TestingModule } from '@nestjs/testing';
import { IntegratorcenterController } from './integratorcenter.controller';

describe('Integratorcenter Controller', () => {
  let controller: IntegratorcenterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IntegratorcenterController],
    }).compile();

    controller = module.get<IntegratorcenterController>(IntegratorcenterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
