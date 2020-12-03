import { HttpStatus, Injectable } from '@nestjs/common';
import { ResponseData } from '../../util/responseData';
import { httpCode, MyException } from '../../app-exception.filter';
import { sign } from 'jsonwebtoken';
import { jwtConstants } from '../../util/constants';

@Injectable()
export class LoginService {
  constructor() {}

  checkAdmin(userName: string, password: string) {
    return userName === 'admin' && password === 'admin';
  }

  login(userName: string, password: string): ResponseData<{ token: string }> {
    if (this.checkAdmin(userName, password)) {
      return {
        code: httpCode.success,
        data: {
          token: sign({ username: userName, password: password }, jwtConstants.secret, {
            expiresIn: jwtConstants.time,
          }),
        },
      };
    }
    throw new MyException(httpCode.passwordIsWrong, HttpStatus.OK);
  }
}
