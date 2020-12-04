import { Body, Controller, Get, Post } from '@nestjs/common';
import { TrainService } from './train.service';
import { Roles } from '../../common/decorator/roles.decorator';
import { AddTrainDto, DeleteTrainDataDto } from './addTrain.dto';

@Controller('api/train')
export class TrainController {
  constructor(private trainService: TrainService) {
  }

  @Roles('admin')
  @Get('all')
  async getAll() {
    return this.trainService.getAll();
  }

  @Roles('admin')
  @Post('add')
  async addTrain(@Body() body: AddTrainDto) {
    return await this.trainService.addTrain(
      body.trainId,
      body.trainType,
      body.model,
      body.startStationId,
      body.destinationStationId,
    );
  }

  @Roles('admin')
  @Post('delete')
  async deleteTrain(@Body() body: DeleteTrainDataDto) {
    return await this.trainService.deleteTrain(body.trainId);
  }
}
