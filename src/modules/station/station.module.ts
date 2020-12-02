import { Module } from '@nestjs/common';
import { StationController } from './station.controller';
import { StationService } from './station.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StationEntity } from '../../database/station.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StationEntity])],
  controllers: [StationController],
  providers: [StationService],
})
export class StationModule {}
