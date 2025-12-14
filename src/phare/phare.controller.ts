import { Controller, Get } from '@nestjs/common';
import { PhareService } from './phare.service';

@Controller('phare')
export class PhareController {
    constructor(private readonly phareService: PhareService) {}
@Get('turn-on')
turnOnPhare() {
this.phareService.turnOnPhare();
return 'Phare allumé';
}
}
