import { IsNotEmpty, IsEmail } from 'class-validator';

export class ProfileResponseDto {
  @IsNotEmpty()
  @IsEmail()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
