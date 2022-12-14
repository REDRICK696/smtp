import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from 'src/user.entity';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(user: User, token: string) {
    // const url = `http://localhost:3000/auth/confirm?token=${token}`;
    console.log(user.email), console.log('before sendMail');
    await this.mailerService.sendMail({
      to: 'derekgoni@gmail.com',
      //from: '"Support Team" <support@example.com>', // override default from
      subject: 'Welcome to Nice App! Confirm your Email',
      template: './confirmation', // `.hbs` extension is appended automatically
      context: {
        // ✏️ filling curly brackets with content
        name: user.name,
        //name: 'person',
        url: 'link',
      },
    });
    console.log('after sendMail');
  }
}
