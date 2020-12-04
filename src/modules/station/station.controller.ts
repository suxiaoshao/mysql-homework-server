import { Body, Controller, Get, Post } from '@nestjs/common';
import { StationService } from './station.service';
import { ResponseSuccessData } from '../../util/responseData';
import { StationEntity } from '../../database/station.entity';
import { Roles } from '../../common/decorator/roles.decorator';
import { AddStationDataDto, DeleteStationDataDto } from './addData.dto';

@Controller('api/station')
export class StationController {
  constructor(private stationService: StationService) {}

  @Get('all')
  async getInfo(): Promise<ResponseSuccessData<StationEntity[]>> {
    return await this.stationService.getStation();
  }

  @Roles('admin')
  @Post('add')
  async add(@Body() body: AddStationDataDto) {
    return await this.stationService.addStation(body.stationName, body.phoneNumber, body.stationId);
  }

  @Roles('admin')
  @Post('delete')
  async delete(@Body() body: DeleteStationDataDto) {
    return await this.stationService.deleteStation(body.stationId);
  }
}
