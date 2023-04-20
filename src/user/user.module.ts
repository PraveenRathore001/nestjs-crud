import { Module } from '@nestjs/common';
import { usercontroller } from './user.controller';
import { userservice } from './user.service';
import { UserSchema } from './user.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name:'classUserschema', schema:UserSchema }])],
  controllers: [usercontroller],
  providers: [userservice],
})
export class userModule {}