import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Profile} from 'src/profile/entity/profile.entity';

@Injectable()
/**
 * @class ProfileService
 */
export class ProfileService {
  /**
   * ProfileService constructor
   *
   * @constructor
   * @param {EntityRepository<Profile>} profileRepository
   */
  constructor(
    @InjectModel(Profile.name) private profileModel: Model<Profile & Document>
  ) {}

  /**
   * Get profile
   *
   * @public
   * @async
   * @param {(ObjectId | string)} id
   * @returns Promise<Profile>
   */
  public async getByUser(id: string): Promise<Profile> {
    return this.profileModel.findOne({user_id: id}).populate('user');
  }
}
