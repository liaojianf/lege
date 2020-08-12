import { Injectable } from '@nestjs/common';
import { JwtUsersService } from '../jwtusers/jwtusers.service';

@Injectable()
export class JwtAuthService {
    constructor(private readonly jwtUsersService: JwtUsersService) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.jwtUsersService.findOne(username);
        if (user && user.password === pass){
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
}
