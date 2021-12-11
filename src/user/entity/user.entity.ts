import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Profile } from 'src/profile/entity/profile.entity';
import { Types } from 'mongoose';

@Schema({ collection: 'users' })
/**
 * @class User
 */
export class User {
  id: string;

  @Prop()
  username: string;

  @Prop({type: Types.ObjectId, ref: 'Profile'})
  profile: Profile;
}

const UserSchema = SchemaFactory.createForClass(User);
UserSchema.set('toObject', {
  virtuals: true,
  transform: (doc, ret, options) => {
    // remove the _id of every document before returning the result
    delete ret._id;
    return ret;
  }})
export { UserSchema }
