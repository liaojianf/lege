import { Test, TestingModule } from '@nestjs/testing';
import { IntegratormanagementService } from './integratormanagement.service';

describe('IntegratormanagementService', () => {
  let service: IntegratormanagementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IntegratormanagementService],
    }).compile();

    service = module.get<IntegratormanagementService>(IntegratormanagementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
