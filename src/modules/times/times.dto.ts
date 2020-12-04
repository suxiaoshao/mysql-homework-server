import { IsBooleanString, IsNumberString, IsString } from 'class-validator';

export class SearchTimesDto {
  @IsString()
  @IsNumberString()
  destinationStationId: string;
  @IsString()
  @IsBooleanString()
  gdcPrefix: string;
}
