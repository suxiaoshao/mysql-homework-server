import { Controller, Get, Query } from '@nestjs/common';
import { PassengerService } from './passenger.service';

@Controller('api/passenger')
export class PassengerController {
  constructor(private passengerService: PassengerService) {}

  @Get('getTravelInfo')
  async getTravelInfo(@Query('passengerId') passengerId: string) {
    return await this.passengerService.getTravelInfoListByPassengerId(Number(passengerId));
  }
}
