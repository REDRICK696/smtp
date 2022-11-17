import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private config: ConfigService) {}
  getHello(): string {
    console.log(this.config.get('MAIL_HOST'));
    return this.config.get('MAIL_HOST') ?? 'undefined config';
  }
}
