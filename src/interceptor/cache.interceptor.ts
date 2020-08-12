import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Injectable()
export class CacheInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        //覆盖抛出的异常
        console.log('CacheInterceptor..before');
        const isCached = true;
        if (isCached) {
            return of([]);
        }
        return next.handle();
    }
}