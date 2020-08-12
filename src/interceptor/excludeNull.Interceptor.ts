import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ExcludeNullInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        //空参异常触发
        console.log('ExcludeNullInterceptor...before');
        return next
            .handle()
            .pipe(map(value => value === null ? '' : value ));
    }
}