import {Observable} from "rxjs/index";
import {CanActivate, ExecutionContext, Injectable} from "@nestjs/common";
//授权守卫
@Injectable()
export class AuthGuard implements CanActivate {
    //这十一个函数，参数是ExecutionContext，返回值类型可能是boolean， Promise<boolean> ，Observable<boolean>
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        console.log("守卫授权");
        return validateRequest(request);
    }
}

function validateRequest(req: any): boolean {
    // add your code here ...
    console.log(req.toString());
    return true;
}