import { IsString } from 'class-validator';

export class JwtPayloadDto {
  @IsString()
  sub: string;

  @IsString()
  username: string;
}
