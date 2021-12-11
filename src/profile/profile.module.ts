import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {Profile, ProfileSchema} from './entity/profile.entity';
import {ProfileService} from './service/profile.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Profile.name, schema: ProfileSchema}]),
  ],
  providers: [ProfileService],
  exports: [ProfileService, MongooseModule],
})
/**
 * @class ProfileModule
 */
export class ProfileModule {}
