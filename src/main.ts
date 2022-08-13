import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger'


async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});

  app.setGlobalPrefix('/api');

  const config = new DocumentBuilder()
    .setTitle('GroUp API')
    .setDescription('Это документация REST API для GroUp')
    .setVersion('1.0.0')
    .addTag('GroUp Inc.')
    .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document)

  app.enableCors()
  await app.listen(process.env.PORT || 3000);

  console.log(`http://localhost:${process.env.PORT}`);
}
bootstrap();
