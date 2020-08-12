import {
    Controller, Get, Post, Query, Render, UseFilters, Response, Body, UsePipes, Param,
    UploadedFile, UseInterceptors, UseGuards, Request, Delete
} from '@nestjs/common';
import {Roles} from "./Dto/roles.decorator"
// import {HttpExceptionFilter} from  './http-exception.filter'
import {HttpExceptionFilter} from './http-exception.filter '
import { AppService } from './app.service';
import {doc} from "prettier";
import {JoiValidationPipe} from "./Joi/JoiValidationPipe";
import {CreateCatDto} from "./Dto/CreateCatDto";
import {RolesGuard} from "./auth/roles.gurad";

@Controller()
@UseGuards(RolesGuard)
// @UseInterceptors(LoggingInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}
    // @Get('/User')
    // async findOne(@User() user: UserEntity) {
    //     console.log(user);
    // }

    @Get('/ab*cd')
    abc():String{
        console.log("abbbbbbcd");

        return 'abbbbbbcd';
    }
  @Get('/hello')
    getHello():String{
      console.log("hello");
        return 'Hello World';
    }

    //用户发送请求来到这里
    //然后传递的参数被管道拦截
    //去到管道类中
    @Get('pipe')
    @UseFilters(HttpExceptionFilter)
    // @UsePipes(new UserPipe())
    pipe(@Query() info){
        console.log(info);
        return `this is Pipe`;
    }

  @Get('/getUser*')
  @Roles('p1','p2')
  @Render("D:\\运维平台\\operation\\public\\view\\users.ejs")
  async getUser(@Request() res,@Query() query){
        if(query.num == null){
            query.num = 0;
        }
      if(query.cpage == null){
          query.cpage = 0;
      }
      query.num = parseInt(query.num) + parseInt(query.cpage);
      if(parseInt(query.num)<=0){
          query.num = 0;
      }
      // const  count = parseInt(  await this.appService.getcount())/5;
      const Maxcount = Math.ceil(parseInt(  await this.appService.getcount())/5) ;
      if(query.num >=Maxcount){
          query.num = Maxcount-1;
      }
      console.log("总页数："+Maxcount);
      const pageList = [];
      for(var i=0;i<Maxcount;i++){
          pageList[i] = i;
      }
      console.log("当前页码数为："+query.num);
       const role = res.session.role;
          let user = await this.appService.getUser(query.num);
          // console.log(user[0].name);  // 现在就是正确返回了 {...}
      return {users:user,admin:res.session.username,role:role,num:query.num,pageList:pageList};
  }

    @Get('/toinsertUser')
    @Roles('p1','p2')
    @Render("D:\\运维平台\\operation\\public\\view\\insert.ejs")
    toinsertUser(@Response() rep){

    }
    @Post('/insert')
    @Roles('p1','p2')
    insertUser(@Response() rep,@Body() body){
        this.appService.insert(body);
        rep.redirect('/getUser');
    }
    @Get('/insertManyUser')
    @Roles('p1','p2')
    insertManyUser(@Response() rep){
        this.appService.insertManyUser();
        rep.redirect('/getUser');
    }

    @Get('/toupdateUsers')
    @Roles('p1')
    async toupdateUsers(){

    }

    @Get('/toupdateUser')
    @Render("D:\\运维平台\\operation\\public\\view\\update.ejs")
    @Roles('p1')
   async toupdateUser(@Response() rep,@Query() query){
        console.log(query.id);
      let user=  await this.appService.getUserById(query.id);

      return {user:user};
    }
    @Post('/updateUser')
    @Roles('p1')
    updateUser(@Response() rep,@Body() body) {
        this.appService.updateUser(body);
        rep.redirect('/getUser');
    }
    @Get('/deleteUser')
    @Roles('p1')
    deleteUser(@Query() query,@Response() rep) {
         this.appService.deleteUser(query.id);
         rep.redirect('/getUser');
    }
    @Get('/test')
    @Roles('p1')
    test(@Query() query){
        // console.log(query);
        console.log("ajax请求"+query.id);
        // rep.redirect('/getUser');
    }

    @Get('/deleteAll')
    @Roles('p1')
    deleteAll(@Query() query){
        console.log(query.ids);
        let idList = [];
        if(query.ids.includes("-")){
            // console.log("多个删除");
             idList = query.ids.split("-");
             this.appService.deleteUsers(idList);
        }else {
            this.appService.deleteUser(query.ids);
        }
        // for(var i=0;i<idList.length;i++){
        //     console.log(idList[i]);
        // }
        //
        // rep.redirect('/getUser');
    }

    @Post('/CreateCatDto')
    @UsePipes(new JoiValidationPipe(new CreateCatDto))
    async create(@Body() createCatDto: CreateCatDto,@Response() res){
        // this.catsService.create(createCatDto);
        res.send("参数验证成功");
    }


}
