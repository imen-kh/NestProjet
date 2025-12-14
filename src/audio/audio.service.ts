import { Injectable } from '@nestjs/common';
import { AudioRepository } from './AudioRepository';
@Injectable()
export class AudioService {
    constructor(private readonly audioRepository:AudioRepository ){}
    playMusic(){
        this.audioRepository.playMusic();
    }
}
