import { Module } from '@nestjs/common';
import { APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { MainGuard } from './app.mainGuard';
import { Transforminterceptor } from './pipe/transforminterceptor.pipe';
import { CatsModule } from './modules/cats/index';
import modules from './modules';
import { ValidationPipe } from './pipe/validation.pipe';

@Module({
  imports: modules,
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: MainGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: Transforminterceptor,
    },
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
