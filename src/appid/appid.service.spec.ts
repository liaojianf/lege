import { Test, TestingModule } from '@nestjs/testing';
import { AppidService } from './appid.service';

describe('AppidService', () => {
  let service: AppidService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppidService],
    }).compile();

    service = module.get<AppidService>(AppidService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
