import { IsInt, IsNumber, IsString, Length } from 'class-validator';

export class AddTravelDto {
  @Length(0, 30)
  @IsString()
  orderId: string;
  @Length(0, 10)
  @IsString()
  ticketType: string;
  @IsNumber()
  ticketPrice: number;
  @IsInt()
  passengerId: number;
  @Length(0, 10)
  @IsString()
  trainId: string;
  @IsInt()
  departureStationId: number;
  @IsInt()
  arrivalStationId: number;
}

export class DeleteTravelDto {
  @Length(0, 30)
  @IsString()
  orderId: string;
}
