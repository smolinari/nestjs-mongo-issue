import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../entity/user.entity';

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
  public async getByName(username: string): Promise<User> {
    const user = await this.userModel
      .findOne({ username })
      .populate('profile');
    
    console.log('user', user)

    if (!user) {
      return {} as User;
    }
    return user.toObject();
  }
 }
