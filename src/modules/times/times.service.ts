import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TimesEntity } from '../../database/time.entity';

@Injectable()
export class TimesService {
  constructor(@InjectRepository(TimesEntity) private timesRepository: Repository<TimesEntity>) {}

  async getTimesByDestinationStationId(destinationStationId: number): Promise<TimesEntity[]> {
    if (destinationStationId !== 0) {
      return await this.timesRepository
        .createQueryBuilder('times')
        .where(`times.destinationStationId=:id`, { id: destinationStationId })
        .getMany();
    } else {
      return await this.timesRepository.find();
    }
  }
}
