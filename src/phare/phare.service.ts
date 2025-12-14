import { Injectable } from '@nestjs/common';
import { PhareRepository } from './PhareRepository';
@Injectable()
export class PhareService {
    constructor(private readonly pharseRepository:PhareRepository){}
    turnOnPhare(){
        this.pharseRepository.turnOn
    }
}
