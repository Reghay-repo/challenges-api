import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto';
import { CreateUserDto } from '../user/dto';
import { CreateCompanyDto } from '../user/dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register/company')
  registerCompany(@Body() dto: CreateCompanyDto) {
    return this.authService.registerCompany(dto);
  }

  @Post('register/user')
  registerUser(@Body() dto: CreateUserDto) {
    return this.authService.registerUser(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }
}
