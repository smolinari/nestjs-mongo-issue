import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Profile} from 'src/profile/entity/profile.entity';
import {User} from '../entity/user.entity';

@Injectable()
/**
 * @class UserService
 */
export class UserService {
  /**
   * UserService constructor
   *
   * @constructor
   * @param {Repository<User>} userRepository
   */
  constructor(
    @InjectModel(User.name) private userModel: Model<User & Document>
  ) {}

  /**
   * Get user by name
   *
   * @public
   * @param {string} username
   * @param {(boolean | undefined)} profile
   * @returns {Promise<User>}
   */
  public async getByName(username: string, profile?: boolean): Promise<User> {
    const user = await this.userModel
      .findOne({username})
      .populate('profile', null, Profile.name);

    if (!user) {
      return {} as User;
    }

    return user.toObject();
  }
}
