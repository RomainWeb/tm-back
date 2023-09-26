import { IsNotEmpty, IsEmail } from 'class-validator';

export class ProfileResponseDto {
  @IsNotEmpty()
  @IsEmail()
  name: string;

  @IsNotEmpty()
  display_name: string;

  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
