/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { User } from 'src/user.entity';
import { AuthService } from './auth.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AuthService) {}
}
