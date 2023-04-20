import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { userservice } from "./user.service";
// import { classUserschema } from "./user.model";
import { userdto } from "./user.dto";
// import { get } from "http";

@Controller('user')
export class usercontroller{
   constructor(private userService:userservice) {

   }
   
@Post()
  created(@Body() userdtto:userdto) {
    return this.userService.create(userdtto)
    
  }
@Delete('/:id') 
Deletedata(@Param('id') userID:string) {
    console.log(userID);
  return this.userService.deletedata(userID)
  
  }
@Put('/:id')
updatedata(@Param('id') userID:string, @Body() userdtto:userdto) {
    return this.userService.Updatedata(userID,userdtto)
}
@Get()
getdataa(){
  return this.userService.getallusers()
}
@Get('/:id')
getbyid(@Param('id') id:string){
  return this.userService.GetByID(id)
}
}