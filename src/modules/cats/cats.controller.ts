import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsGuard } from './guard/cats.guard';
import { CreateCatDto } from './dto';

@Controller('/cats')
@UseGuards(CatsGuard)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  @Get('/catsname/:id')
  getHtml(@Param('id') id: string, @Query() tid: string): string {
    console.log(id, tid);
    return '1231231231';
  }

  @Post()
  getHello(@Body() createCatDto: CreateCatDto): string {
    return this.catsService.getHello('123');
  }
}
