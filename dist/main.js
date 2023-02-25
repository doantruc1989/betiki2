"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const cors = require("cors");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Cats example')
        .setDescription('The cats API description')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.useGlobalPipes(new common_1.ValidationPipe({
        forbidUnknownValues: false,
        skipMissingProperties: true,
    }));
    const origin = '*';
    const corsOptions = {
        origin: origin,
        methods: 'GET,HEAD,POST,PUT,PATCH,DELETE,OPTIONS',
        allowedHeaders: 'Content-Type, Authorization, X-Requested-With, Accept, X-XSRF-TOKEN, secret, recaptchavalue',
    };
    app.use(cors(corsOptions));
    await app.listen(3006);
}
bootstrap();
//# sourceMappingURL=main.js.map