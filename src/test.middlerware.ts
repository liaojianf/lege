import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class TestMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: Function) {
        console.log('Request...'); //在客户端有请求时，在控制台输出记录
        console.log(`Request URL:${req.originalUrl}`); //从请求中获取原始Url地址
        console.log(`Request method:${req.method}`);//获取请求的方法如GET,POST等
        console.log(`Request Time:${new Date().toLocaleDateString()}`);//获取请求的时间戳
        console.log(`Request Parameter:${req.params}`);//针对catName的路由返回路由内容
        next();
    }
}