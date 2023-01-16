import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { ErrorsInterceptor } from './interceptors/errors.interceptor';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  //Route pour l'authentification
  //@UseInterceptors(new ErrorsInterceptor())
  @Post('login')
  login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }
}
