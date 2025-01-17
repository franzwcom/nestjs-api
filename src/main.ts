import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as compression from 'compression';
import * as helmet from 'helmet';

import * as rateLimit from 'express-rate-limit';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.use(helmet());
    app.use(compression());
    
    app.use(
        rateLimit({
          windowMs: 15 * 60 * 1000, // 15 minutes
          max: 100, // limit each IP to 100 requests per windowMs
        }),
      );


    await app.listen(process.env.PORT || 4000);
}
bootstrap();
