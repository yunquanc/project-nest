import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class CatsService {
  getHello(name: string): string {
    return name || 'Hello World!';
  }
  getHello2(): string {
    return 'Hello World!~~~~';
  }
}
