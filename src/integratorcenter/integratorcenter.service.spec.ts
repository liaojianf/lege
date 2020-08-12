import { Test, TestingModule } from '@nestjs/testing';
import { IntegratorcenterService } from './integratorcenter.service';

describe('IntegratorcenterService', () => {
  let service: IntegratorcenterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IntegratorcenterService],
    }).compile();

    service = module.get<IntegratorcenterService>(IntegratorcenterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
