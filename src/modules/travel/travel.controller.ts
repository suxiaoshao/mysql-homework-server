import { Controller, Get, Post } from "@nestjs/common";
import { TravelService } from './travel.service';
import { Roles } from '../../common/decorator/roles.decorator';

@Controller('api/travel')
export class TravelController {
  constructor(private travelService: TravelService) {}

  @Roles('admin')
  @Get('all')
  async getAll() {
    return this.travelService.getAll();
  }
  @Roles('admin')
  @Post('delete')
  async deleteOne(){

  }
}
