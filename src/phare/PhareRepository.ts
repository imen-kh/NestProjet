import { Injectable } from '@nestjs/common';
import { GenerateurRepository } from 'src/generateur/GenerateurRepository';
@Injectable()
export class PhareRepository {
constructor(private readonly generateurRepository: GenerateurRepository) {}
turnOn() {
this.generateurRepository.generatePower();
console.log('Phare allumé');
}
}