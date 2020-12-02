import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PassengerEntity } from '../../database/passenger.entity';
import { Repository } from 'typeorm';
import { TravelInfoEntity } from '../../database/travelInfo.entity';
import { ResponseData } from '../../util/responseData';

@Injectable()
export class PassengerService {
  constructor(
    @InjectRepository(PassengerEntity) private passengerRepository: Repository<PassengerEntity>,
    @InjectRepository(TravelInfoEntity) private travelInfoRepository: Repository<TravelInfoEntity>,
  ) {}

  async getTravelInfoListByPassengerId(passengerId: number): Promise<ResponseData<TravelInfoEntity[]>> {
    const passenger = await this.passengerRepository
      .createQueryBuilder('passenger')
      .leftJoinAndSelect('passenger.travelInfos', 'travelInfo')
      .whereInIds(passengerId)
      .getOne();
    return {
      code: 0,
      data: await Promise.all(
        (passenger?.travelInfos
          ?.map<Promise<TravelInfoEntity | undefined>>(async (value) => this.getTravelInfoData(value.orderId))
          ?.filter(async (value) => {
            const thisValue = await value;
            return thisValue !== undefined;
          }) as Promise<TravelInfoEntity>[] | undefined) ?? [],
      ),
    };
  }

  async getTravelInfoData(orderId: string): Promise<TravelInfoEntity | undefined> {
    return await this.travelInfoRepository
      .createQueryBuilder('travelInfo')
      .leftJoinAndSelect('travelInfo.departureStation', 'departureStation')
      .leftJoinAndSelect('travelInfo.passenger', 'passenger')
      .leftJoinAndSelect('travelInfo.trainInfo', 'trainInfo')
      .leftJoinAndSelect('travelInfo.arrivalStation', 'arrivalStation')
      .whereInIds(orderId)
      .getOne();
  }
}
