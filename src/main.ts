import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import {LoggerMiddleware} from "./logger.middlerware";
import {NestExpressApplication} from '@nestjs/platform-express'
import {LoggingInterceptor} from "./interceptor/logging.interceptor";
// import {RolesGuard} from "./auth/roles.guard";
async function bootstrap(){
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets('public',{
    prefix:'/static'
  });
  //全局拦截器
  //   app.useGlobalInterceptors(new LoggingInterceptor());
    //cookie的使用
    app.use(cookieParser());
    //session的使用
    app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 600000 }}));
    //中间件的使用
    // app.use(LoggerMiddleware);
    //全局守卫
    // app.useGlobalGuards(new RolesGuard());
  await app.listen(8080,function () {
      console.log("请访问127.0.0.1:8080端口");
  });
}
bootstrap();
