import { Test, TestingModule } from '@nestjs/testing';
import { JwtusersService } from './jwtusers.service';

describe('JwtusersService', () => {
  let service: JwtusersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JwtusersService],
    }).compile();

    service = module.get<JwtusersService>(JwtusersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
