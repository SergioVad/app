import { NestFactory } from "@nestjs/core";
import {Logger} from '@nestjs/common'
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
    const logger = new Logger('bootstrap')
    const PORT = 5000;
    const app = await NestFactory.create(AppModule);
    app.enableCors();

    const config = new DocumentBuilder()
        .setTitle('Документация REST API')
        .setDescription('Автоматическая генерация документации')
        .setVersion('1.0.0')
        .addTag('Иванов Сергей')
        .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/api/docs', app, document)

    await app.listen(PORT)
    logger.log(`Server has started on port = ${PORT}`)
}

bootstrap()