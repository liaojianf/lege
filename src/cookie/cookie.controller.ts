import {Controller, Get,Response,Request} from '@nestjs/common';

@Controller()
export class CookieController {

    @Get('/setcookie')
    setCookie(@Response() res){
        res.cookie('name','廖剑锋',{maxAge:1000*60*24,httpOnly:true})
        res.send("cookie设置成功");
    }

    @Get('/getcookie')
    getCookie(@Request() req){
        console.log(req.cookies.username);
        return req.cookies.name;
    }
}
