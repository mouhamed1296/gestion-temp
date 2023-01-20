import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { User } from 'src/users/entities/user.entity';
import { JwtAuthGuard } from './guards/jwtAuthGuard';

type RequestWithUser = Request & { user: Partial<User> };

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  //Route pour l'authentification
  //@UseInterceptors(new ErrorsInterceptor())
  @Post('login')
  login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  profile(@Req() request: RequestWithUser) {
    return request.user;
  }
}
