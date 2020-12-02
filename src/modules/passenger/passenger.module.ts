import { Module } from '@nestjs/common';
import { PassengerController } from './passenger.controller';
import { PassengerService } from './passenger.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassengerEntity } from '../../database/passenger.entity';
import { TravelInfoEntity } from '../../database/travelInfo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PassengerEntity, TravelInfoEntity])],
  controllers: [PassengerController],
  providers: [PassengerService],
})
export class PassengerModule {}
