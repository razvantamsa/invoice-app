import { IsString } from 'class-validator';

export class UserRequestDto {
  @IsString()
  userId: string;
}
