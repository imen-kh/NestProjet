import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
const app = await NestFactory.create(AppModule);
app.useGlobalPipes(new ValidationPipe({
transform: true,
//supprimer tout les champs qui ne sont pas definis dans le dto 
forbidNonWhitelisted: true,
//Si le body contient des champs non autorisés, NestJS renvoie une erreur.
whitelist: true,
//Transforme automatiquement les types de données pour correspondre au DTO.
}));
await app.listen(process.env.PORT ?? 3000);
//await → le code attend que le serveur soit prêt avant de continuer
}
bootstrap();