import { Injectable } from '@nestjs/common';
import { GenerateurRepository } from './GenerateurRepository';
@Injectable()
export class GenerateurService {
    constructor(private readonly generateurRepository:GenerateurRepository){}
 generatePower(){
    this.generateurRepository.generatePower
 }


}
