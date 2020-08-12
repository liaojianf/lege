import { Test, TestingModule } from '@nestjs/testing';
import { ShebeiService } from './shebei.service';

describe('ShebeiService', () => {
  let service: ShebeiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShebeiService],
    }).compile();

    service = module.get<ShebeiService>(ShebeiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
