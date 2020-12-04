import { IsInt, IsString, Length } from 'class-validator';

export class AddTrainDto {
  @Length(0, 10)
  @IsString()
  trainId: string;
  @Length(0, 10)
  @IsString()
  trainType: string;
  @Length(0, 20)
  @IsString()
  model: string;
  @IsInt()
  startStationId: number;
  @IsInt()
  destinationStationId: number;
}

export class DeleteTrainDataDto {
  @Length(0, 10)
  @IsString()
  trainId: string;
}
