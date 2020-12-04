import { IsNumber, IsOptional, IsString, Length } from 'class-validator';

export class AddStationDataDto {
  @Length(0, 30)
  @IsString()
  stationName: string;
  @Length(0, 20)
  @IsString()
  phoneNumber: string;
  @IsOptional()
  @IsNumber()
  stationId: number | undefined;
}
export class DeleteStationDataDto {
  @IsNumber()
  stationId: number;
}
