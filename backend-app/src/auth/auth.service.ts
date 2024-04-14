import { Injectable } from '@nestjs/common';
import { UserDAO } from 'src/database/dao/user.dao';

@Injectable()
export class AuthService {
  constructor(private userDAO: UserDAO) {}

  async validateUser(email: string, password: string) {
    const user = await this.userDAO.findOne(email);
    if (user && user.password === password) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
