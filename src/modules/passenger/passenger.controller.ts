import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PassengerService } from './passenger.service';
import { Roles } from '../../common/decorator/roles.decorator';
import { AddPassengerDto, DeletePassengerDto, SearchPassengerDto } from './addPassenger.dto';

@Controller('api/passenger')
export class PassengerController {
  constructor(private passengerService: PassengerService) {}

  @Get('getTravelInfo')
  async getTravelInfo(@Query() body: SearchPassengerDto) {
    return await this.passengerService.getTravelInfoListByPassengerId(Number(body.passengerId));
  }

  @Roles('admin')
  @Get('all')
  async getAll() {
    return await this.passengerService.getALl();
  }

  @Roles('admin')
  @Post('add')
  async addPassenger(@Body() body: AddPassengerDto) {
    return await this.passengerService.addPassenger(
      body.passengerId,
      body.idNumber,
      body.passengerName,
      body.gender,
      body.phoneNumber,
    );
  }

  @Roles('admin')
  @Post('delete')
  async deletePassenger(@Body() body: DeletePassengerDto) {
    return await this.passengerService.deletePassenger(body.passengerId);
  }
}
