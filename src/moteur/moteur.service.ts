import { Injectable } from '@nestjs/common';
import { MoteurRepository } from './MoteurRepository';

@Injectable()
export class MoteurService {
    constructor(private readonly moteurRepository:MoteurRepository){}
startMoteur(){
    this.moteurRepository.start();
}
getMoteurStatus(){
    return this.moteurRepository.getStatus
}

}
