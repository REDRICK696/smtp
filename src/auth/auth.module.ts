/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MailModule } from '../mail/mail.module';
import { AuthController } from './auth.controller';

@Module({
  imports: [MailModule], // 📧
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
