import {Module} from '@nestjs/common';
import {UserController} from './controller/user.controller';
import {User, UserSchema} from './entity/user.entity';
import {UserService} from './service/user.service';
import {MongooseModule} from '@nestjs/mongoose';
import {ProfileModule} from '../profile/profile.module';

@Module({
  imports: [
    MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),
    ProfileModule,
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
/**
 * @class UserModule
 */
export class UserModule {}
