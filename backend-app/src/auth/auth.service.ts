import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async login() {
    return 'logging in';
  }

  async signup() {
    return 'signing in';
  }
}
