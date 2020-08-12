import {Controller, Get, HttpException, HttpStatus} from '@nestjs/common';

@Controller('exception')
export class ExceptionController {

    @Get()
    exception(){
        throw new HttpException({
            status: HttpStatus.FORBIDDEN,
            error: 'This is a custom message',
        }, 403);
    }
}
