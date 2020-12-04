import { Module } from '@nestjs/common';
import { TravelController } from './travel.controller';
import { TravelService } from './travel.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TravelInfoEntity } from '../../database/travelInfo.entity';
import { PassengerEntity } from '../../database/passenger.entity';
import { StationEntity } from '../../database/station.entity';
import { TrainInfoEntity } from '../../database/trainInfo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TravelInfoEntity, PassengerEntity, StationEntity, TrainInfoEntity])],
  controllers: [TravelController],
  providers: [TravelService],
})
export class TravelModule {}
