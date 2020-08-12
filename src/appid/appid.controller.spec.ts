import { Test, TestingModule } from '@nestjs/testing';
import { AppidController } from './appid.controller';

describe('Appid Controller', () => {
  let controller: AppidController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppidController],
    }).compile();

    controller = module.get<AppidController>(AppidController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
