import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { ApiException } from './common/exceptions/api.exception';
import {LoginException} from "./common/exceptions/login.exception";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {

    catch(exception, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception.getStatus();

        if (exception instanceof ApiException){
            response
                .status(status)
                .json({
                    errorCodes: exception.getErrorCode(),
                    errorMessage: exception.getErrorMessage(),
                    date: new Date().toLocaleDateString(),
                    name:'我叫廖剑锋',
                    path: request.url,
                });

        }if (exception instanceof LoginException){
            response
                .status(status)
                .json({
                    errorCodes: exception.getErrorCode(),
                    errorMessage: exception.getErrorMessage(),
                    date: new Date().toLocaleDateString(),
                    name:'我叫廖剑锋',
                    path: request.url,
                });

        }  else {

            response
                .status(status)
                .json({
                    statusCode: status,
                    date: new Date().toLocaleDateString(),
                    path: request.url,
                });
        }
    }

}