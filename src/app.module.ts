import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InjectConnection, MongooseModule } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { userModule } from './user/user.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://0.0.0.0:27017/DB'),userModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  @InjectConnection() private connection: Connection;
  onModuleInit() {
    console.log('db connected successfully');
  }
}
