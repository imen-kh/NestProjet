import { Module } from '@nestjs/common';
import { MessagesController } from './Message.controller'
import { MessagesRepository } from  './Message.Repository'
import { MessagesService } from './MessageService'
@Module({
controllers: [MessagesController],
providers: [MessagesRepository, MessagesService]
})

export class MessagesModule { }
