import {Test, TestingModule} from '@nestjs/testing';
import {AppController} from './app.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return {"ping": "pong"}', () => {
      expect(appController.ping()).toStrictEqual<{ping: 'pong'}>({
        ping: 'pong',
      });
    });
  });
});
