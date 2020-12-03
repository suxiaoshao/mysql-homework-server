import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

export enum httpCode {
  success,
  unknown,
  noPassenger,
  passwordIsWrong,
  lackData,
  landExpiration,
}

export class MyException extends HttpException {
  public code: httpCode | undefined;

  constructor(code: httpCode, status: HttpStatus) {
    super('un', status);
    this.code = code;
  }
}

@Catch(HttpException)
export class AppExceptionFilter implements ExceptionFilter {
  catch(exception: MyException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    console.log(exception);

    response.status(status).json({
      code: exception.code ?? 1,
      data: null,
    });
  }
}
