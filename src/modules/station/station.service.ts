import { Injectable } from '@nestjs/common';
import { StationEntity } from '../../database/station.entity';
import { ResponseSuccessData } from '../../util/responseData';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { httpCode } from '../../app-exception.filter';

@Injectable()
export class StationService {
  constructor(@InjectRepository(StationEntity) private stationRepository: Repository<StationEntity>) {}

  async getAllStation(): Promise<StationEntity[]> {
    return await this.stationRepository.find();
  }

  async getStation(): Promise<ResponseSuccessData<StationEntity[]>> {
    const data = await this.getAllStation();
    return {
      code: httpCode.success,
      data: data,
    };
  }

  async addStation(stationName: string, phoneNumber: string, stationId?: number) {
    const newStation = this.stationRepository.create({
      stationName: stationName,
      phoneNumber: phoneNumber,
      stationId: stationId,
    });
    const newData = await this.stationRepository.save(newStation);
    return {
      code: httpCode.success,
      data: newData,
    };
  }

  async deleteStation(stationId: number) {
    const oldStation = this.stationRepository.create({
      stationId: stationId,
    });
    await this.stationRepository.remove(oldStation);
    return {
      code: httpCode.success,
      data: {},
    };
  }
}
