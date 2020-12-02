import { Controller, Get } from '@nestjs/common';
import { StationService } from './station.service';
import { ResponseSuccessData } from '../../util/responseData';
import { StationEntity } from '../../database/station.entity';

@Controller('api/station')
export class StationController {
  constructor(private stationService: StationService) {}

  @Get('getAllStation')
  async getInfo(): Promise<ResponseSuccessData<StationEntity[]>> {
    return await this.stationService.getStation();
  }
}
