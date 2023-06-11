import { FastifyAdapter, NestFastifyApplication} from '@nestjs/platform-fastify';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger'
import fastifyCsrf from '@fastify/csrf-protection';
import fastifyCookie from '@fastify/cookie';
import compression from '@fastify/compress';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from '@fastify/helmet'
import * as path from 'path';
import * as fs from 'fs';

async function bootstrap() {

  const CORS_OPTIONS = {
    origin: ['*'],
    allowedHeaders: [
    'Access-Control-Allow-Origin',
    'Origin',
    'X-Requested-With',
    'Accept',
    'Content-Type',
    'Authorization',
  ],
  exposedHeaders: 'Authorization',
  credentials: true,
  methods: ['GET', 'POST', 'DELETE', 'PATCH'],
};

  const ssl = process.env.SSL === 'true' ? true : false;
  let httpsOptions = null;
  if (ssl) {
    const keyPath = process.env.SSL_KEY_PATH || '';
    const certPath = process.env.SSL_CERT_PATH || '';
    httpsOptions = {
      key: fs.readFileSync(path.join(__dirname, keyPath)),
      cert: fs.readFileSync(path.join(__dirname, certPath)),
    };
  }

  const adapter = new FastifyAdapter({ logger: true, https: httpsOptions });
  adapter.enableCors(CORS_OPTIONS) 

  const app = await NestFactory.create<NestFastifyApplication>(AppModule,adapter);
  
  const config = new DocumentBuilder()
  .setTitle('GroUp API')
    .setDescription('Это документация REST API для GroUp')
    .setVersion('1.0.0')
    .addTag('GroUp Inc.')
    .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/w27BMtn2IyoD3GIZknBtnrn5f', app, document)

  await app.register(helmet);
  await app.register(fastifyCsrf);
  await app.register(compression, { encodings: ['gzip', 'deflate'] });
  await app.listen(process.env.PORT || 3000, '0.0.0.0');
}
bootstrap();
