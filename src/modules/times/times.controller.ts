import { Controller, Get, Query } from '@nestjs/common';
import { TimesService } from './times.service';
import { SearchTimesDto } from './times.dto';

@Controller('api/times')
export class TimesController {
  constructor(private timesService: TimesService) {}

  @Get()
  async getTimesByDestinationStationId(@Query() body: SearchTimesDto) {
    return {
      code: 0,
      data: await this.timesService.getTimesByDestinationStationId(
        parseInt(body.destinationStationId),
        body.gdcPrefix === 'true',
      ),
    };
  }
}
