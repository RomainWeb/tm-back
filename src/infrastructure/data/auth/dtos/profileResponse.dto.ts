import { IsEmail, IsNotEmpty } from 'class-validator';

export class ProfileResponseDto {
  @IsNotEmpty()
  display_name: string;

  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
