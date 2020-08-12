import {Controller, Get,Response,Request} from '@nestjs/common';

@Controller('')
export class SessionController {
    @Get('/setsession')
    setSession(@Request() req):String{
        req.session.name = '张三';
        return '设置session成功';
    }
    @Get('/getname')
    getname(@Request() res){
        // res.setSession.name = '张三';

        return res.session.name;
    }

    @Get('/getusername')
    getusername(@Request() res){
        // res.setSession.name = '张三';

        return res.session.username;
    }
}
