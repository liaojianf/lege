import { Test, TestingModule } from '@nestjs/testing';
import { ShangpinService } from './shangpin.service';

describe('ShangpinService', () => {
  let service: ShangpinService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShangpinService],
    }).compile();

    service = module.get<ShangpinService>(ShangpinService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
