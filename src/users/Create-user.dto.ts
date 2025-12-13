import { IsString, IsNotEmpty, IsEmail } from 'class-validator';
export class CreateUserDto {
@IsString()
@IsNotEmpty({message:"le nom d utuilisateur ne doit pas etre vide  "})
username: string;
@IsEmail()
@IsNotEmpty({message:"l'email ne doit pas etre vide "})
email: string;
@IsString()
status: string;
}