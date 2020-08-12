import { HttpException, HttpStatus } from '@nestjs/common';
import { ApiErrorCode } from './enums/api-error-code.enum';

//继承HttpException异常类
export class ApiException extends HttpException {

    private errorMessage: string;
    private errorCode: ApiErrorCode;

    constructor(errorMessage: string, errorCode: ApiErrorCode, statusCode: HttpStatus) {

        //页面中显示的错误消息
        //必须要有super方法
        super(errorMessage, statusCode);
        this.errorMessage = errorMessage;
        this.errorCode = errorCode;
    }

    getErrorCode(): ApiErrorCode {
        return this.errorCode;
    }

    getErrorMessage(): string {
        return this.errorMessage;
    }

}