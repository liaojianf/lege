import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import {CreateCatDto} from '../Dto/CreateCatDto'
@Injectable()
export class JoiValidationPipe implements PipeTransform {
    constructor(private readonly schema: CreateCatDto) {}

    transform(value: any, metadata: ArgumentMetadata) {
        console.log(value);
        const error = this.schema.validate(value);
        if (error) {
            throw new BadRequestException('Validation failed');
        }
        return value;
    }
}