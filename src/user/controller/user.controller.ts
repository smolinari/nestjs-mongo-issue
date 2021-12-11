import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { User } from '../entity/user.entity';
import {UserService} from '../service/user.service';

@Controller('user')
@UseInterceptors(ClassSerializerInterceptor)
export class UserController {
  /**
   * UserController constructor
   *
   * @constructor
   * @param {UserService} userService
   */
  constructor(
    private readonly userService: UserService
  ) {}

  @Get(':username')
  /**
   * Get user by name
   *
   * @public
   * @async
   * @param {Param} params
   * @returns Promise<User>
   */
  public async byName (@Param() params): Promise<User> {
    return this.userService.getByName(params.username);
  }
}
