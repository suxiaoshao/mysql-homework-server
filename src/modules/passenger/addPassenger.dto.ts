import { IsInt, IsString, Length } from 'class-validator';

export class AddPassengerDto {
  @IsInt()
  passengerId: number;
  @Length(0, 18)
  @IsString()
  idNumber: string;
  @Length(0, 30)
  @IsString()
  passengerName: string;
  @Length(0, 2)
  @IsString()
  gender: string;
  @Length(0, 11)
  @IsString()
  phoneNumber: string;
}

export class DeletePassengerDto {
  @IsInt()
  passengerId: number;
}
