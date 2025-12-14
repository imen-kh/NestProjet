import { Injectable } from '@nestjs/common';
import { PhareRepository} from 'src/phare/PhareRepository';
import { AudioRepository } from 'src/audio/AudioRepository';

@Injectable()
export class VehiculeRepository {
constructor(
private readonly phareRepository: PhareRepository,
private readonly audioRepository: AudioRepository,
) {}
operate() {
this.phareRepository.turnOn();
this.audioRepository.playMusic();
console.log('Véhicule en fonctionnement');
}
}