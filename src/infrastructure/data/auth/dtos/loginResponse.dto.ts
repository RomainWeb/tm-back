import { IsNotEmpty, IsNumber } from 'class-validator';

export class LoginResponseDto {
  @IsNotEmpty()
  @IsNumber()
  statusCode: number;

  @IsNotEmpty()
  message: string;

  @IsNotEmpty()
  accessToken: string;

  @IsNotEmpty()
  refreshToken: string;
}
