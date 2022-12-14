import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  imports: [],
  controllers: [CatsController],
  providers: [CatsService],
  exports: [],
})
export class CatsModule {}
