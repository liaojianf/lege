import {
    Controller, Get, Post, Query, Render, UseFilters, Response, Body, UsePipes, Param,
    UseInterceptors, UseGuards, Request, HttpStatus
} from '@nestjs/common';
import {AdminPipe} from '../admin.pipe'
import {ExcludeNullInterceptor} from '../interceptor/excludeNull.Interceptor'
import {HttpExceptionFilter} from  '../http-exception.filter '
import { AdminService } from './admin.service';
import {RolesGuard} from "../auth/roles.gurad";
import {Roles} from "../Dto/roles.decorator";
import {AuthGuard} from "../auth/auth.guard";
import {LoginException} from "../common/exceptions/login.exception";
import {ApiErrorCode} from "../common/exceptions/enums/api-error-code.enum";

@Controller()
@UseFilters(HttpExceptionFilter)
export class AdminController {
    constructor(private readonly adminService: AdminService) {}
    @Get('/tologin*')
    // @UseInterceptors(LoggingInterceptor)
    @Render("D:\\运维平台\\operation\\public\\view\\login.ejs")
    async tologinUser(@Query() query){
        if(query.tip != null){
            if(query.tip == 1) {
                return {tip: 1}
            }
        }else {
            return {tip: 0}
        }

    }
    @Get('/loginout')
    loginout(@Request() req,@Response() res){
        req.session.role = '';
        req.session.username = '';
        req.session.head = '';
        req.session.user = '';
        res.redirect('/tologin');

    }

    @Post('/login')
    @UseGuards(AuthGuard)
    @UseInterceptors(ExcludeNullInterceptor)
    @UsePipes(new AdminPipe())
    async loginUser(@Body() body,@Response() rep,@Request() req){
        console.log(Math.floor(Math.random()*20+1));
        req.session.username = body.username;
         // = body.head;
        let user  = await this.adminService.login(body);
        // console.log(user.username);
        // rep.redirect('/failed');
        if(user != null){
            console.log("登陆成功");
            req.session.head = user.head;
            rep.redirect('/main');
        }else {
            // throw new LoginException("用户名或者密码错误", ApiErrorCode.USER_ID_INVALID, HttpStatus.BAD_REQUEST);
            rep.redirect('/tologin?tip=1');
        }
    }

    @Get('/failed')
    @Render('D:\\运维平台\\operation\\public\\view\\failedlogin.ejs')
    failed(){

    }

}
