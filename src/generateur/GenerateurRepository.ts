import { Injectable } from "@nestjs/common";
import { MoteurRepository } from "src/moteur/MoteurRepository";
@Injectable()
export class GenerateurRepository {
constructor(private readonly moteurRepository: MoteurRepository) {}
generatePower() {
this.moteurRepository.start();
console.log('Générateur en fonctionnement');
}
}