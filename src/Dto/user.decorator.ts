import { createParamDecorator, ExecutionContext } from '@nestjs/common';


export const User = createParamDecorator((data, req) => {
    return req.user;
});