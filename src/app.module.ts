import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { MainGuard } from './app.mainGuard';
import { CatsModule } from './modules/cats/index';

@Module({
  imports: [CatsModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: MainGuard,
    },
  ],
})
export class AppModule {}
