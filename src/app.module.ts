import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose'
import {StudentSchema} from './schemas/app.schema'
import {AdminSchema} from './schemas/admin.schema'
import {UserSchema} from './schemas/user.schema'
import {BankSchema} from './schemas/bank.schema'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminController } from './admin/admin.controller';
import { AdminService } from './admin/admin.service';
import {LoggerMiddleware} from "./logger.middlerware";
import {TestMiddleware} from "./test.middlerware"
import {AuthMiddleware} from "./auth/auth.middleware"
import {LoginMiddleware} from "./auth/login.middleware"
import { FileuploadController } from './fileupload/fileupload.controller';
import { CookieController } from './cookie/cookie.controller';
import { SessionController } from './session/session.controller';
import { ExceptionController } from './exception/exception.controller';
import apply = Reflect.apply;
import {APP_INTERCEPTOR} from "@nestjs/core";
import {LoggingInterceptor} from "./interceptor/logging.interceptor";
import {CacheInterceptor} from "./interceptor/cache.interceptor";
import { AuthModule } from './auth/auth.module';
import { RegisterController } from './register/register.controller';
import { JwtAuthModule } from './jwtauth/jwtauth.module';
import { JwtUsersModule } from './jwtusers/jwtusers.module';
import { JwtController } from './jwt/jwt.controller';
import { MainController } from './main/main.controller';
import { PpController } from './pp/pp.controller';
import { ShebeiController } from './shebei/shebei.controller';
import { ShebeiService } from './shebei/shebei.service';
import { ShujuController } from './shuju/shuju.controller';
import { ShujuService } from './shuju/shuju.service';
import { ShangpinController } from './shangpin/shangpin.controller';
import { ShangpinService } from './shangpin/shangpin.service';
import { YingxiaoController } from './yingxiao/yingxiao.controller';
import { YingxiaoService } from './yingxiao/yingxiao.service';
import { TongzhiController } from './tongzhi/tongzhi.controller';
import { TongzhiService } from './tongzhi/tongzhi.service';
import { AppidController } from './appid/appid.controller';
import { AppidService } from './appid/appid.service';
import { IntegratorcenterController } from './integratorcenter/integratorcenter.controller';
import { IntegratorcenterService } from './integratorcenter/integratorcenter.service';
import { IntegratormanagementController } from './integratormanagement/integratormanagement.controller';
import { IntegratormanagementService } from './integratormanagement/integratormanagement.service';
import { ShanghuController } from './shanghu/shanghu.controller';
import { ShanghuService } from './shanghu/shanghu.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/mongoose_test',{ useUnifiedTopology: true ,useNewUrlParser: true}),
      MongooseModule.forFeature(([{name:'Student',schema:StudentSchema,collection:"students"},
          {name:'Admin',schema:AdminSchema,collection:"admin"},
          {name:'User',schema:UserSchema,collection:"user"},
          {name:'Bank',schema:BankSchema,collection:"bank"}])),
      AuthModule,
],
    controllers: [AppController, AdminController, FileuploadController, CookieController, SessionController, ExceptionController, RegisterController, JwtController, MainController, PpController, ShebeiController, ShujuController, ShangpinController, YingxiaoController, TongzhiController, AppidController, IntegratorcenterController, IntegratormanagementController, ShanghuController],
  providers: [AppService, AdminService, ShebeiService, ShujuService, ShangpinService, YingxiaoService, TongzhiService, AppidService, IntegratorcenterService, IntegratormanagementService, ShanghuService
      // ,
      // // 全局拦截器
      // {provide: APP_INTERCEPTOR,useClass:LoggingInterceptor},
      // {provide: APP_INTERCEPTOR,useClass:CacheInterceptor}
      ]
})

export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            // .apply(AuthMiddleware)
            // .forRoutes(AppController)
            .apply(LoginMiddleware)
            .forRoutes(AppController);
    }
}
