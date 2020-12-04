import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginDataDto } from './loginData.dto';

@Controller('api/login')
export class LoginController {
  constructor(private loginService: LoginService) {
  }

  @Post()
  async login(@Body() body: LoginDataDto) {
    return this.loginService.login(body.password as string, body.userName as string);
  }
}
