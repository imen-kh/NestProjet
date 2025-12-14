import { Injectable } from '@nestjs/common';
import { PhareRepository } from 'src/phare/PhareRepository';
import { AudioRepository } from 'src/audio/AudioRepository';
@Injectable()
export class VehiculeService {
    constructor(private readonly PhareRepository:PhareRepository,private readonly audioRepository:AudioRepository){}


operatevehicule(){
    this.PhareRepository.turnOn();
    this.audioRepository.playMusic();
    console.log('véhicule en fonctionnement');
}
}
