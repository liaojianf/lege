import { Test, TestingModule } from '@nestjs/testing';
import { YingxiaoService } from './yingxiao.service';

describe('YingxiaoService', () => {
  let service: YingxiaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YingxiaoService],
    }).compile();

    service = module.get<YingxiaoService>(YingxiaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
