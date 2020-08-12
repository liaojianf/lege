import {CanActivate, ExecutionContext, Injectable, Session} from '@nestjs/common';
import {async, Observable} from 'rxjs';
import { Reflector } from '@nestjs/core';
import {AdminService} from "../admin/admin.service";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private readonly reflector: Reflector,private readonly adminService: AdminService) {}

     canActivate(context: ExecutionContext): boolean {
        //用户名是ljf的话允许请求通过
        const roles = this.reflector.get<string[]>('roles', context.getHandler());

        const classs = context.getClass();
        const ctrl = this.reflector.get<string>('path', context.getClass());
        const request = context.switchToHttp().getRequest();
        //从中间件的request中获取出user
        const user = request.user;
        console.log("角色列表:"+roles);
        // console.log(user);
        for(var i=0;i<user.role.length;i++){
            console.log(user.role[i]);
            if (roles.includes(user.role[i])){

                console.log("包含该用户");
                return true;
            } else {
                return false;
            }
        }
        // const hasRole = () => user.roles.some((role) => roles.includes(role));
        // return user && user.roles && hasRole();
    }

}