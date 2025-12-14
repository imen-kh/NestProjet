import { Module } from '@nestjs/common';
import { MoteurService } from './moteur.service';
import { MoteurRepository } from './MoteurRepository';
import { MoteurController } from './moteur.controller';

@Module({
  providers: [MoteurService, MoteurRepository],
  exports: [MoteurRepository],
  controllers: [MoteurController]
})
export class MoteurModule {}
