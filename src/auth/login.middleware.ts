import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import {AdminService} from "../admin/admin.service";
// import {UserService} from "./user.service";

@Injectable()
export class LoginMiddleware implements NestMiddleware<Request|any, Response> {
    constructor(private readonly adminService: AdminService) {}
    async use(req: Request|any, res: Response, next: Function) {
        const name = req.session.username;
        let users = await this.adminService.getUserByName(name);
        if(users != null){
            if(users.role.includes("p1")){
                console.log("管理员");
                req.session.role = "管理员";
            } else {
                console.log("普通用户");
                req.session.role = "普通用户";
            }
        }else {
            console.log("用户名不存在");
        }

        console.log(users);
        req.user = users;
        next();
    }
}