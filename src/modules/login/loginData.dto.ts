import { IsString } from 'class-validator';

export class LoginDataDto {
  @IsString()
  userName: string | undefined;
  @IsString()
  password: string | undefined;
}
