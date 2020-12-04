import { Body, Controller, Get, Post } from '@nestjs/common';
import { TravelService } from './travel.service';
import { Roles } from '../../common/decorator/roles.decorator';
import { AddTravelDto, DeleteTravelDto } from './deleteData.dto';

@Controller('api/travel')
export class TravelController {
  constructor(private travelService: TravelService) {
  }

  @Roles('admin')
  @Get('all')
  async getAll() {
    return this.travelService.getAll();
  }

  @Roles('admin')
  @Post('add')
  async addTravel(@Body() body: AddTravelDto) {
    return await this.travelService.addTravel(
      body.orderId,
      body.ticketType,
      body.ticketPrice,
      body.passengerId,
      body.trainId,
      body.departureStationId,
      body.arrivalStationId,
    );
  }

  @Roles('admin')
  @Post('delete')
  async deleteTravel(@Body() body: DeleteTravelDto) {
    return await this.travelService.deleteTravel(body.orderId);
  }
}
