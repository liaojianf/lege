import {ArgumentMetadata, HttpStatus, Injectable, PipeTransform,UseFilters} from '@nestjs/common';
import { ApiException } from './common/exceptions/api.exception';
import {ApiErrorCode} from "./common/exceptions/enums/api-error-code.enum";

// import {ApiErrorCode} from "../dist/common/exceptions/enums/api-error-code.enum";
@Injectable()
export class UserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value);
    console.log(metadata);
    //对拦截的数据进行验证
    if(value.id == 1){
      //参数验证不符合则抛出异常
        //将参数传递到异常类的有参构造方法中
        //抛出的异常交给自定义全局异常过滤器来处理
        throw new ApiException('用户ID无效', ApiErrorCode.USER_ID_INVALID, HttpStatus.BAD_REQUEST);
    }
    return value;
  }
}
