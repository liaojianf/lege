import { Test, TestingModule } from '@nestjs/testing';
import { ShanghuService } from './shanghu.service';

describe('ShanghuService', () => {
  let service: ShanghuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShanghuService],
    }).compile();

    service = module.get<ShanghuService>(ShanghuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
