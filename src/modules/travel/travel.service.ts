import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TravelInfoEntity } from '../../database/travelInfo.entity';
import { httpCode } from '../../app-exception.filter';

@Injectable()
export class TravelService {
  constructor(@InjectRepository(TravelInfoEntity) private travelRepository: Repository<TravelInfoEntity>) {}

  async getAll() {
    const data = await this.travelRepository.find({
      relations: ['passenger', 'trainInfo', 'departureStation', 'arrivalStation'],
    });
    return {
      code: httpCode.success,
      data: data,
    };
  }
}
