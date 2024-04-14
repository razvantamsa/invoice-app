import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import * as express from 'express';
import { LocalAuthGuard } from './local.auth.guard';

@Controller('auth')
export class AuthController {
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: express.Request) {
    return req.user;
  }
}
