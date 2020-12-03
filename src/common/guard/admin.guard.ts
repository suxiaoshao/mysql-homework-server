import { CanActivate, ExecutionContext, HttpStatus, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { decode } from 'jsonwebtoken';
import { httpCode, MyException } from '../../app-exception.filter';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get<string | undefined>('roles', context.getHandler());
    if (roles === 'admin') {
      const request = context.switchToHttp().getRequest<Request>();
      const token = request.header('token');
      if (token) {
        const data = decode(token, { json: true });
        if (data?.userName === 'admin' && data?.password === 'admin') {
          return true;
        } else {
          throw new MyException(httpCode.landExpiration, HttpStatus.OK);
        }
      }
    }
    return true;
  }
}
