import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';

@Schema({collection: 'users_profiles'})
/**
 * @class Profile
 */
export class Profile {
  id: string;

  @Prop()
  /**
   * @public
   * @property
   * @type {(string | undefined)}
   */
  fullname?: string;
}

const ProfileSchema = SchemaFactory.createForClass(Profile);
ProfileSchema.set('toObject', {
  virtuals: true, transform: (doc, ret, options) => {
    // remove the _id of every document before returning the result
    delete ret._id;
    return ret;
  }})
export { ProfileSchema }
