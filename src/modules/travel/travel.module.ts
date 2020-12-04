import { Module } from '@nestjs/common';
import { TravelController } from './travel.controller';
import { TravelService } from './travel.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TravelInfoEntity } from '../../database/travelInfo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TravelInfoEntity])],
  controllers: [TravelController],
  providers: [TravelService],
})
export class TravelModule {}
