import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TrainInfoEntity } from '../../database/trainInfo.entity';
import { Repository } from 'typeorm';
import { httpCode } from '../../app-exception.filter';
import { StationEntity } from '../../database/station.entity';

@Injectable()
export class TrainService {
  constructor(
    @InjectRepository(TrainInfoEntity) private trainRepository: Repository<TrainInfoEntity>,
    @InjectRepository(StationEntity) private stationRepository: Repository<StationEntity>,
  ) {}

  async getAll() {
    return {
      code: httpCode.success,
      data: await this.trainRepository.find({ relations: ['startStation', 'destinationStation'] }),
    };
  }

  async addTrain(
    trainId: string,
    trainType: string,
    model: string,
    startStationId: number,
    destinationStationId: number,
  ) {
    const startStation = await this.stationRepository.findOne(startStationId);
    const destinationStation = await this.stationRepository.findOne(destinationStationId);
    const newTrain = this.trainRepository.create({
      trainId: trainId,
      trainType: trainType,
      model: model,
      startStation: startStation,
      destinationStation: destinationStation,
    });
    const data = await this.trainRepository.save(newTrain);
    data.destinationStation = destinationStation;
    data.startStation = startStation;
    return {
      code: httpCode.success,
      data: data,
    };
  }

  async deleteTrain(trainId: string) {
    const train = this.trainRepository.create({ trainId: trainId });
    await this.trainRepository.remove(train);
    return {
      code: httpCode.success,
      data: {},
    };
  }
}
