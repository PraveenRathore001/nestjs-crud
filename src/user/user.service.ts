import { InjectModel } from "@nestjs/mongoose";
import { CatDocument, classUserschema } from "./user.model";
import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { userdto } from "./user.dto";




@Injectable()
export class userservice {
    constructor(@InjectModel('classUserschema') private usermodel:Model<CatDocument> ){}
    // @post('adduser')
   async create(Createuserdto:userdto){
    // this.usermodel lika hena ye tumhare schema ka kaam kr raha he or Createuserdto tumhara data he
        const data= new this.usermodel(Createuserdto)  
        return data.save()
    }

     async deletedata(deleteID:string){
        const deletedata=await this.usermodel.findByIdAndDelete(deleteID)
        return deletedata;
     }
    async Updatedata(updateID:string ,updateddto:userdto){
        // console.log(updateddto);
        
        // new this.usermodel(updateddto)
        const updes= await this.usermodel.findByIdAndUpdate(updateID,updateddto,{new:true})
        return updes
    }
     getallusers(){
        return this.usermodel.find()
    }
    async GetByID(id:string){
        const data= await this.usermodel.findById(id)
        return data
    }
}   