import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
  UsePipes,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class Transforminterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    Logger.log(request.url, '正常接口请求');
    return next.handle().pipe(
      map((data) => {
        return {
          statuscode: 200,
          message: '请求成功',
          data: data,
        };
      }),
    );
  }
}
