import {Controller, Get} from '@nestjs/common';

@Controller()
/**
 * @class AppController
 */
export class AppController {
  @Get()
  /**
   * @public
   * @returns {ping: 'pong'}
   */
  public ping(): {ping: 'pong'} {
    return {ping: 'pong'};
  }
}
