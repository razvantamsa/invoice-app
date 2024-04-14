import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDAO } from 'src/database/dao/user.dao';

@Injectable()
export class AuthService {
  constructor(
    private userDAO: UserDAO,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userDAO.findOne(email);
    if (user && user.password === pass) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
