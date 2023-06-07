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
  UsePipes,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsGuard } from './guard/cats.guard';
import { CreateCatDto } from './dto';

@UseGuards(CatsGuard)
@Controller('/cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  // /cats/10?id=123
  @Post('/')
  getHello(@Body() createCatDto: CreateCatDto): string {
    console.log('cats');
    return this.catsService.getHello('123');
  }

  @Get('/catsname/:id')
  getHtml(@Param('id') id: string, @Query() tid: string): string {
    console.log(id, tid);
    return '1231231231';
  }
}
