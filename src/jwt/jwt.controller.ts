import {Controller, Post, UseGuards,Request} from '@nestjs/common';
import {AuthGuard} from "@nestjs/passport";

@Controller('jwt')
export class JwtController {

    @UseGuards(AuthGuard('local'))
    @Post('auth/login')
    async login(@Request() req) {
        return req.user;
    }
}
