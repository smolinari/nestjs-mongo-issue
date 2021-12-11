import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Exclude} from 'class-transformer';
import {Profile} from 'src/profile/entity/profile.entity';
import * as mongoose from 'mongoose';

@Schema({collection: 'users'})
/**
 * @class User
 */
export class User {
  @Prop()
  @Exclude()
  _id: mongoose.Schema.Types.ObjectId;

  @Prop()
  username: string;

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Profile'})
  profile: Profile;
}

export const UserSchema = SchemaFactory.createForClass(User);
