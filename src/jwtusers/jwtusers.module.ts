import { Module } from '@nestjs/common';
import { JwtUsersService} from './jwtusers.service';

@Module({
  providers: [JwtUsersService],
    exports: [JwtUsersService]
})
export class JwtUsersModule {}
