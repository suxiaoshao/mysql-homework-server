import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PassengerEntity } from '../../database/passenger.entity';
import { Repository } from 'typeorm';
import { TravelInfoEntity } from '../../database/travelInfo.entity';
import { ResponseData } from '../../util/responseData';
import { httpCode, MyException } from '../../app-exception.filter';

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
    if (passenger !== undefined && passenger.travelInfos) {
      return {
        code: 0,
        data: await Promise.all(
          (passenger.travelInfos
            .map<Promise<TravelInfoEntity>>(async (value) => {
              return (await this.getTravelInfoData(value.orderId)) as TravelInfoEntity;
            })
            .filter(async (value) => {
              const thisValue = await value;
              return thisValue !== undefined;
            }) as Promise<TravelInfoEntity>[]) ?? [],
        ),
      };
    }
    throw new MyException(httpCode.noPassenger, HttpStatus.ACCEPTED);
  }

  async getTravelInfoData(orderId: string | undefined): Promise<TravelInfoEntity | undefined> {
    if (orderId === undefined) {
      return undefined;
    }
    return await this.travelInfoRepository
      .createQueryBuilder('travelInfo')
      .leftJoinAndSelect('travelInfo.departureStation', 'departureStation')
      .leftJoinAndSelect('travelInfo.passenger', 'passenger')
      .leftJoinAndSelect('travelInfo.trainInfo', 'trainInfo')
      .leftJoinAndSelect('travelInfo.arrivalStation', 'arrivalStation')
      .whereInIds(orderId)
      .getOne();
  }

  async getALl() {
    return {
      code: httpCode.success,
      data: await this.passengerRepository.find(),
    };
  }

  async addPassenger(
    passengerId: number,
    idNumber: string,
    passengerName: string,
    gender: string,
    phoneNumber: string,
  ) {
    const passenger = this.passengerRepository.create({
      passengerId: passengerId,
      idNumber: idNumber,
      passengerName: passengerName,
      gender: gender,
      phoneNumber: phoneNumber,
    });
    const newData = await this.passengerRepository.save(passenger);
    return {
      code: httpCode.success,
      data: newData,
    };
  }

  async deletePassenger(passengerId: number) {
    const passenger = this.passengerRepository.create({
      passengerId: passengerId,
    });
    await this.passengerRepository.remove(passenger);
    return {
      code: httpCode.success,
      data: {},
    };
  }
}
