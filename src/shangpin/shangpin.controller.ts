import { Controller } from '@nestjs/common';
import {ShangpinService} from "./shangpin.service";

@Controller('shangpin')
export class ShangpinController {
    constructor(private readonly shangpinService: ShangpinService) {}
}
