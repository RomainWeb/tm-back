import { IsNotEmpty, IsEmail, IsNumber } from 'class-validator';

export class LoginResponseDto {
  @IsNotEmpty()
  @IsNumber()
  statusCode: number;

  @IsNotEmpty()
  @IsEmail()
  message: string;

  @IsNotEmpty()
  @IsEmail()
  accessToken: string;
}
