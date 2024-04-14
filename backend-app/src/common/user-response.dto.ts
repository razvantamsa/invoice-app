import { IsString, IsEmail, IsDate } from 'class-validator';

export class UserResponseDto {
  @IsString()
  id: string;

  @IsEmail()
  email: string;

  @IsString()
  name: string;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;
}
