import { Injectable } from '@nestjs/common';
import { StationEntity } from '../../database/station.entity';
import { ResponseSuccessData } from '../../util/responseData';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class StationService {
  constructor(@InjectRepository(StationEntity) private stationRepository: Repository<StationEntity>) {}

  async getAllStation(): Promise<StationEntity[]> {
    return await this.stationRepository.find();
  }

  async getStation(): Promise<ResponseSuccessData<StationEntity[]>> {
    const data = await this.getAllStation();
    return {
      code: 0,
      data: data,
    };
  }
}
