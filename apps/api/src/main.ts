import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    const config = new DocumentBuilder()
        .setTitle('Your API')
        .setDescription('API description')
        .setVersion('1.0')
        .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('api', app, document)
    app.enableCors()
    await app.listen(process.env.PORT || 4000)
    if (module.hot) {
        module.hot.accept()
        module.hot.dispose(() => app.close())
    }
}
bootstrap()
