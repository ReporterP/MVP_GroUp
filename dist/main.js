"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    app.setGlobalPrefix('/api');
    const config = new swagger_1.DocumentBuilder()
        .setTitle('GroUp API')
        .setDescription('Это документация REST API для GroUp')
        .setVersion('1.0.0')
        .addTag('GroUp Inc.')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('/api/docs', app, document);
    await app.listen(process.env.PORT || 3000);
    console.log(`http://localhost:${process.env.PORT}`);
}
bootstrap();
//# sourceMappingURL=main.js.map