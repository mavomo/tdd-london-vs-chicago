import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const options = new DocumentBuilder()
        .setTitle('Tax computation kata')
        .setDescription('[MS clean code - London vs Chicagp] Apis')
        .setVersion('1.0')
        .addTag("tax-calculator-api")
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('/api', app, document);

    await app.listen(3000);
}

bootstrap();
