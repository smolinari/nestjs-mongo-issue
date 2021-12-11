import {Module} from '@nestjs/common';
import {UserModule} from './user/user.module';
import {AppController} from './app.controller';
import {ProfileModule} from './profile/profile.module';
import {MongooseModule} from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/user-test'),
    UserModule,
    ProfileModule,
  ],
  controllers: [AppController],
  providers: [],
})
/**
 * @class AppModule
 */
export class AppModule {}
