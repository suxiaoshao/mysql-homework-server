import { Controller, Get, Query } from '@nestjs/common';
import { TimesService } from './times.service';

@Controller('api/times')
export class TimesController {
  constructor(private timesService: TimesService) {}

  @Get()
  async getTimesByDestinationStationId(@Query('destinationStationId') destinationStationId) {
    return {
      code: 0,
      data: await this.timesService.getTimesByDestinationStationId(parseInt(destinationStationId)),
    };
  }
}
