import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Exclude} from 'class-transformer';
import * as mongoose from 'mongoose';

@Schema({collection: 'users_profiles'})
/**
 * @class Profile
 */
export class Profile {
  @Prop()
  @Exclude()
  /**
   * @public
   * @property
   * @type {ObjectId}
   */
  public readonly id!: mongoose.Schema.Types.ObjectId;

  @Prop({type: mongoose.Types.ObjectId, ref: 'User'})
  user: mongoose.Schema.Types.ObjectId;

  @Prop()
  /**
   * @public
   * @property
   * @type {(string | undefined)}
   */
  fullname?: string;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
