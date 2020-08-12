import { Test, TestingModule } from '@nestjs/testing';
import { TongzhiService } from './tongzhi.service';

describe('TongzhiService', () => {
  let service: TongzhiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TongzhiService],
    }).compile();

    service = module.get<TongzhiService>(TongzhiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
