import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors'
import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.use(cors());
  await app.listen(process.env.SERVER_PORT ?? 3005, () => {
    console.log(
      `Server is listening on port ${process.env.SERVER_PORT ?? 3005}`,
    );
  });
}
bootstrap();
