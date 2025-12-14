import { Injectable } from "@nestjs/common";
import { MessagesRepository } from "./Message.Repository";

@Injectable()
export class MessagesService {

//Ajouter les dépendances comme argument dans le constructeur
constructor(public messagesRepository: MessagesRepository) { }


findOne(id: string) {
return this.messagesRepository.findOne(id)
}
findAll() {
return this.messagesRepository.findAll()
}
create(content: string) {
return this.messagesRepository.create(content)
}
}

