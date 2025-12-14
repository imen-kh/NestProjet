import { Module } from '@nestjs/common';
import { GenerateurService } from './generateur.service';
import { GenerateurRepository } from './GenerateurRepository';
import { MoteurModule } from 'src/moteur/moteur.module';
import { GenerateurController } from './generateur.controller';

@Module({
  imports:[MoteurModule],
  providers: [GenerateurService, GenerateurRepository],
  exports:[GenerateurRepository],
  controllers: [GenerateurController]
})
export class GenerateurModule {}
