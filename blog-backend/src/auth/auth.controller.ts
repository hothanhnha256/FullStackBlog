import { Controller, Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userSerivce: UsersService,
  ) {}
  @Post('signinUser') //done
  async singin(@Body() authdto: AuthDto) {
    return this.authService.login(authdto);
  }

  @Post('signinAdmin') //done
  async signinAdmin(@Body() authDto: AuthDto) {
    return this.authService.signinAdmin(authDto);
  }

  @Post('signup') //done
  async signup(@Body() signupDto: CreateUserDto) {
    console.log(signupDto);
    const response = await this.authService.signup(signupDto);

    return response;
  }

  @Post('signout')
  async signout() {
    return await this.authService.signout;
  }
}
