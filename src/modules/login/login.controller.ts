import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginPipe } from '../../common/pipe/login.pipe';
import { LoginDataDto } from './loginData.dto';

@Controller('api/login')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @UsePipes(new LoginPipe())
  @Post()
  async login(@Body() body: LoginDataDto) {
    return this.loginService.login(body.password as string, body.userName as string);
  }
}
