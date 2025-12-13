import { Body, Controller, Get, Param, Post, Query,Headers, Patch, Delete } from '@nestjs/common';
import { CreateUserDto } from './Create-user.dto';

@Controller('users')
export class UsersController {
    users = [
{ id: 1, username: 'Mohamed', email: 'mohamed@esprit.tn', status: 'active' },
{ id: 2, username: 'Sarra', email: 'sarra@esprit.tn', status: 'inactive' },
{ id: 3, username: 'Ali', email: 'ali@esprit.tn', status: 'inactive' },
{ id: 4, username: 'Eya', email: 'eya@esprit.tn', status: 'active' },
]
//retourner tout les utulisateur 
@Get() 
findAll(@Query('username') username: string) {
if (username) {
return this.users.filter(user => user.username === username);
}
return this.users;}
//retourner utulisateeur par id 
@Get(':id')
findOne(@Param('id') id: number){
return this.users.find(user => user.id === Number(id));
//@Param sert a identifier une ressource precise  parametre de route
}
//cree utulisateur 
@Post()
create(@Body() CreateUserDto, @Headers('authorization') authHeader: string) {
console.log('Authorization:', authHeader);
const newUser = { id: Date.now(), ...CreateUserDto };
this.users.push(newUser);
return newUser;
}
//update utulisateur 
@Patch(':id')
//onrecupere l id depuis le route , et lees donnes de puis la requette 
update(@Param('id') id: number, @Body() UpdateUserDto: CreateUserDto){
const user = this.users.find(user => user.id === Number(id));
if (user) {
user.username = UpdateUserDto.username;
user.email = UpdateUserDto.email;
user.status = UpdateUserDto.status;
return user;
}
return null;
}


@Delete(':id')
remove(@Param('id') id: number){
const index = this.users.findIndex(user => user.id === Number(id));
if (index !== -1) {
return this.users.splice(index, 1)[0];

}
return null;
}





}
