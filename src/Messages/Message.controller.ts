import { Body, Controller, Get, NotFoundException, Param, Post } from "@nestjs/common";
import { MessagesService } from "./MessageService"
import { CreateMessageDto } from "./CreateMessageDTO";

@Controller('messages')
export class MessagesController {
constructor(public messagesService: MessagesService) { }

@Get()
listMessages() {
return this.messagesService.findAll()
}
@Post()
createMessage(@Body() body: CreateMessageDto) {
console.log(body["content"]);
return this.messagesService.create(body.content)
}

@Get("/:id")
async getMessage(@Param("id") id: string) {
const message = await this.messagesService.findOne(id)
if (!message) {
throw new NotFoundException("Le message n'existe pas")
}
return message
}
}