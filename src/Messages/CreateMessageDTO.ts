import { IsNotEmpty, IsString } from "class-validator";

export class CreateMessageDto{
    @IsString()
    @IsNotEmpty({message:"le message  nest pas vide "})
    content:string 

}