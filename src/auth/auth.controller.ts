/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { User } from 'src/user.entity';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async createUser(@Body() user: User) {
    console.log('Before Signup Call')
    await this.authService.signUp(user)
    return 'This action returns all cats';
  }
}
