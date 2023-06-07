import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCatDto {
  @IsNotEmpty({ message: '用户名不能为空' })
  name: string;
  @IsNotEmpty({ message: '用户名不能为空' })
  age: number;
}
