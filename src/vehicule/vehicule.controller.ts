import { Controller, Get } from '@nestjs/common';
import { VehiculeService } from './vehicule.service';

@Controller('vehicule')
export class VehiculeController {
constructor(private readonly vehiculeService: VehiculeService) {}
@Get('operate')
operateVehicule() {
this.vehiculeService.operatevehicule();
return 'Véhicule en fonctionnement';
}
}
