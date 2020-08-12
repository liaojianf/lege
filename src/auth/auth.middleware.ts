import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import {AdminService} from "../admin/admin.service";
// import {UserService} from "./user.service";

@Injectable()
export class AuthMiddleware implements NestMiddleware<Request|any, Response> {
    constructor(private readonly adminService: AdminService) {}
    async use(req: Request|any, res: Response, next: Function) {
        console.log(`Request Parameter:${req.params.username}`);
        console.log("请求参数: "+req.toString());
        // let users = await this.adminService.getUserByName('ljf');
        // req.user = users;
        next();
    }
}