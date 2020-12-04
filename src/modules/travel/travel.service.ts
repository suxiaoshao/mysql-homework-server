import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TravelInfoEntity } from '../../database/travelInfo.entity';
import { httpCode } from '../../app-exception.filter';
import { StationEntity } from '../../database/station.entity';
import { PassengerEntity } from '../../database/passenger.entity';
import { TrainInfoEntity } from '../../database/trainInfo.entity';

@Injectable()
export class TravelService {
  constructor(
    @InjectRepository(TravelInfoEntity) private travelRepository: Repository<TravelInfoEntity>,
    @InjectRepository(StationEntity) private stationRepository: Repository<StationEntity>,
    @InjectRepository(PassengerEntity) private passengerRepository: Repository<PassengerEntity>,
    @InjectRepository(TrainInfoEntity) private trainRepository: Repository<TrainInfoEntity>,
  ) {}

  async getAll() {
    const data = await this.travelRepository.find({
      relations: ['passenger', 'trainInfo', 'departureStation', 'arrivalStation'],
    });
    return {
      code: httpCode.success,
      data: data,
    };
  }

  async addTravel(
    orderId: string,
    ticketType: string,
    ticketPrice: number,
    passengerId: number,
    trainId: string,
    departureStationId: number,
    arrivalStationId: number,
  ) {
    const passenger = await this.passengerRepository.findOne(passengerId);
    const train = await this.trainRepository.findOne(trainId);
    const departureStation = await this.stationRepository.findOne(departureStationId);
    const arrivalStation = await this.stationRepository.findOne(arrivalStationId);
    const travel = this.travelRepository.create({
      orderId: orderId,
      ticketPrice: ticketPrice,
      ticketType: ticketType,
      passenger: passenger,
      trainInfo: train,
      departureStation: departureStation,
      arrivalStation: arrivalStation,
    });
    const data = await this.travelRepository.save(travel);
    data.arrivalStation = arrivalStation;
    data.departureStation = departureStation;
    data.trainInfo = train;
    data.passenger = passenger;
    return {
      code: httpCode.success,
      data: data,
    };
  }

  async deleteTravel(orderId: string) {
    const travel = this.travelRepository.create({ orderId: orderId });
    await this.travelRepository.remove(travel);
    return {
      code: httpCode.success,
      data: {},
    };
  }
}
