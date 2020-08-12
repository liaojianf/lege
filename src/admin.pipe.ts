import {ArgumentMetadata, HttpStatus, Injectable, PipeTransform} from '@nestjs/common';
import { ApiException } from './common/exceptions/api.exception';
import {ApiErrorCode} from "./common/exceptions/enums/api-error-code.enum";
import {AdminService} from "./admin/admin.service";
import {InjectModel} from "@nestjs/mongoose";
@Injectable()
export class AdminPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('管道参数: username: '+value.username+' password:'+value.password);
    if(value.username == '' || value.password == ''){
      throw new ApiException('用户名或者密码为空', ApiErrorCode.USER_ID_INVALID, HttpStatus.BAD_REQUEST)
    }
    return value;
  }
}
