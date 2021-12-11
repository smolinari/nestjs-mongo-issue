import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';

/**
 * Bootstrap NestJS Application
 *
 * @async
 * @returns Promise<void>
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
}
bootstrap();
