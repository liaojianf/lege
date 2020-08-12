import { Module } from '@nestjs/common';
import { JwtAuthService } from './jwtauth.service';
import {JwtUsersModule} from '../jwtusers/jwtusers.module'
import {LocalStrategy} from "./local.strategy";
import {PassportModule} from "@nestjs/passport";
//不需要加入到app.module中，不然会报异常
@Module({
    imports:[JwtUsersModule,PassportModule],
  providers: [JwtAuthService,LocalStrategy],
})
export class JwtAuthModule {}
