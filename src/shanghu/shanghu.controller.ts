import {Body, Controller, Get, Inject, Post, Render, Response, Request, Query, Put} from '@nestjs/common';
import {ShanghuService} from "./shanghu.service";
import {timestamp} from "rxjs/internal/operators";
@Controller('shanghu')
export class ShanghuController {
    constructor(private readonly shanghuService: ShanghuService) {}
    //快速开户
    @Get('/toOpenCcount*')
    @Render('D:\\运维平台\\operation\\public\\view\\shanghu\\openccount.ejs')
    toOpenCcount(){
    }

    //开户路由
    @Post('openccount')
   async openccount(@Body() body,@Response() res,@Request() req){
       const account = await this.shanghuService.getAccount(body.account);
       if(account != null){
        console.log("用户已存在,重定向开户页面");
           res.redirect('/shanghu/toOpenCcount');
       }else {
           var date = new Date();
           var time = date.getTime();
           console.log("主收款码:"+time);

           if(body.check == '1'){
               body.mainaccount =  time;
           }else {
               body.mainaccount = null;
               console.log("没有主收款");
           }
           req.session.user = body;

           res.redirect('/shanghu/toconfirm');
       }
    }

    //显示用户详情
    @Get('/toconfirm')
    @Render('D:\\运维平台\\operation\\public\\view\\shanghu\\confirm.ejs')
    toconfirm(@Request() req){
        const user = req.session.user;
        console.log(req.session.user);
        return {user:user};
    }

    //开户
    @Post('/confirm')
    async confirm(@Body() body,@Response() res,@Request() req){
        console.log("用户信息");
        console.log(body);
       const result = await this.shanghuService.register(body);
       if(result == 1){
           res.redirect('/shanghu/toOpenCcount');
       }else {
           //清空session中用户信息
           req.session.user = '';
           res.redirect('/shanghu/tobank');
       }
    }

    //去到银行卡绑定页面，如果session中的user不为空则进行开户操作
    @Get('/tobank*')
    @Render('D:\\运维平台\\operation\\public\\view\\shanghu\\bank.ejs')
    tobank(@Request() req){
        if(req.session.user != '' && req.session.user != undefined){
        console.log(req.session.user);
            this.shanghuService.register(req.session.user);
            req.session.user = '';
        }
    }

    @Post('/bank')
   async ajax(@Body() body){
        console.log(body);
        console.log("绑定银行卡");
        const bank = await this.shanghuService.bank(body);
        console.log(bank);
        if(bank == 1){
            return {"data":1};
        }else if(bank ==2){
            return {"data":2};
        }else {
            return {"data":3};
        }
    }

    //绑定银行卡
    @Post('/bank')
    async bank(@Body() body,@Response() res){
        console.log("绑定银行卡");
        console.log(body);

       const bank = await this.shanghuService.bank(body);
        if(bank == 1 || bank == 2){
            throw new Error;
        }else {
            return {"data":"dfsdfsdf"};
        }
    }

    //去密码修改页面
    @Get('/tocpassword*')
    @Render('D:\\运维平台\\operation\\public\\view\\shanghu\\cpassword.ejs')
    tocpassword(@Request() res){
    }

    //根据账户名查询用户时否存在
    @Get('/cpassword')
    @Render('D:\\运维平台\\operation\\public\\view\\shanghu\\cpassword.ejs')
    async  cpassword(@Query() query){
        const account = await this.shanghuService.getAccount(query.account);
        console.log(account);
        if(account == null){
            throw new Error;
        }
    }

    //修改用户密码
    @Post('/changepassword')
    async  changepassword(@Body() body,@Response() res){
        console.log("用户"+body.account+"修改后的密码:"+body.password);
        const result = await this.shanghuService.changepassword(body);
        if(result == true){
            res.redirect('/shanghu/tocpassword')
        }
    }

    //用户信息查询界面
    @Get('/tocheckuser*')
    @Render('D:\\运维平台\\operation\\public\\view\\shanghu\\checkuser.ejs')
    tocheckuser(){

    }

    @Get('/checkuser')
    checkuser(){

    }


}
