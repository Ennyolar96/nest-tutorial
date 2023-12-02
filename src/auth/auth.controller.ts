import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';
import { AuthServices } from './auth.services';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(
    private AuthServices: AuthServices,
  ) {}
  // create the route

  @Post('signup')
  // @Body('password', ParseIntPipe) converting the password into number
  SignUp(@Body() dto: AuthDto) {
    return this.AuthServices.Register(dto);
  }

  @Post('signin')
  SignIn() {
    return this.AuthServices.Login();
  }
}
