import { IsNotEmpty, IsEmail, IsNumber } from 'class-validator';

export class RegisterResponseDto {
  @IsNotEmpty()
  @IsNumber()
  statusCode: number;

  @IsNotEmpty()
  @IsEmail()
  message: string;
}
