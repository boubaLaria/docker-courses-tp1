import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Configuration CORS plus permissive pour le développement
  app.enableCors({
    origin: true, // Permet toutes les origines en développement
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  
  const port = process.env.PORT || 5001;
  await app.listen(port);
  console.log(`Backend API running at http://localhost:${port}`);
}
bootstrap();
