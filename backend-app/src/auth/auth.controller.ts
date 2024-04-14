import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './passport/local.guard';
import { Public } from './passport/public.decorator';
import { UserResponseDto } from 'src/common/user-response.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: { user: Partial<UserResponseDto> }) {
    return this.authService.login({
      id: req.user.id,
      name: req.user.name,
    });
  }
}
