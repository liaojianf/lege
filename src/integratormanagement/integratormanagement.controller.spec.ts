import { Test, TestingModule } from '@nestjs/testing';
import { IntegratormanagementController } from './integratormanagement.controller';

describe('Integratormanagement Controller', () => {
  let controller: IntegratormanagementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IntegratormanagementController],
    }).compile();

    controller = module.get<IntegratormanagementController>(IntegratormanagementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
