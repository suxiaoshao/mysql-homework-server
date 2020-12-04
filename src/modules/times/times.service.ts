import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TimesEntity } from '../../database/time.entity';

@Injectable()
export class TimesService {
  constructor(@InjectRepository(TimesEntity) private timesRepository: Repository<TimesEntity>) {}

  async getTimesByDestinationStationId(destinationStationId: number, gdcPrefix: boolean): Promise<TimesEntity[]> {
    let query = this.timesRepository.createQueryBuilder('times').where(`1=1`);
    if (destinationStationId !== 0) {
      query = query.andWhere(`times.destinationStationId=:id`, { id: destinationStationId });
    }
    if (gdcPrefix) {
      query = query.andWhere(`times.trainId REGEXP :trainStr`, { trainStr: '^[GDC].*' });
    }
    return await query.getMany();
  }
}
