import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginRequestDto } from 'src/common/login.dto';
import { UserDAO } from 'src/database/dao/user.dao';
import { UserResponseDto } from 'src/common/user-response.dto';
import BcryptUtils from 'src/common/bcrypt.utils';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  pepper: string;

  constructor(
    private configService: ConfigService,
    private userDAO: UserDAO,
    private jwtService: JwtService,
  ) {
    this.pepper = this.configService.get<string>('BCRYPT_PEPPER', '');
  }

  async validateUser(
    email: string,
    pass: string,
  ): Promise<UserResponseDto | null> {
    const user = await this.userDAO.findOne(email);
    if (user && BcryptUtils.comparePassword(pass, user.password, this.pepper)) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: LoginRequestDto) {
    const payload = { username: user.name, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
