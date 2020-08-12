import { Test, TestingModule } from '@nestjs/testing';
import { ShujuService } from './shuju.service';

describe('ShujuService', () => {
  let service: ShujuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShujuService],
    }).compile();

    service = module.get<ShujuService>(ShujuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
