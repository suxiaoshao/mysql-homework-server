import { Module } from '@nestjs/common';
import { TrainController } from './train.controller';
import { TrainService } from './train.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrainInfoEntity } from '../../database/trainInfo.entity';
import { StationEntity } from '../../database/station.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TrainInfoEntity, StationEntity])],
  controllers: [TrainController],
  providers: [TrainService],
})
export class TrainModule {}
