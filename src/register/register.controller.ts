import {Body, Controller, Get, Post, Query, Render, Response, UseInterceptors} from '@nestjs/common';
import {AdminService} from "../admin/admin.service";
import {FileInterceptor} from "@nestjs/platform-express";

@Controller()
export class RegisterController {
    constructor(private readonly adminService: AdminService) {}

    @Get('/toregister')
    @Render("D:\\运维平台\\operation\\public\\view\\register.ejs")
    toregister(@Query() query){
        if(query.warning != null){
            console.log(query.warning);
            return {warning:false}
        }
        return {warning:true}
    }

    @Post('/register')
    @UseInterceptors(FileInterceptor('file'))
   async  register(@Body() body,@Response() res){
        // body.head =
       const registers = await this.adminService.register(body);

       console.log(registers);
       if(registers == false){
           res.redirect("/toregister?warning=1");

       }else {
           res.redirect('/tologin')
       }
    }

}
