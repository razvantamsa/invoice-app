import { IsString } from 'class-validator';

export class LoginRequestDto {
  @IsString()
  id: string;

  @IsString()
  name: string;
}
