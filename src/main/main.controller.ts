import {Controller, Get, Render,Response,Request} from '@nestjs/common';

@Controller()
export class MainController {
    @Get('main*')
    @Render('D:\\运维平台\\operation\\public\\view\\main.ejs')
    main(@Request() req){
        return {admin:req.session.username,head:req.session.head}
}
}
