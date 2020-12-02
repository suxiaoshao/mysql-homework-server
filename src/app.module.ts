import { Module } from '@nestjs/common';
import { StationModule } from './modules/station/station.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StationEntity } from './database/station.entity';
import { TimesEntity } from './database/time.entity';
import { TimeModule } from './modules/times/times.module';
import { PassengerEntity } from './database/passenger.entity';
import { TrainInfoEntity } from './database/trainInfo.entity';
import { TimeTableEntity } from './database/timeTable.entity';
import { TravelInfoEntity } from './database/travelInfo.entity';
import { PassengerModule } from './modules/passenger/passenger.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'sushao',
      password: '123456',
      database: 'station_db',
      entities: [StationEntity, TimesEntity, PassengerEntity, TrainInfoEntity, TimeTableEntity, TravelInfoEntity],
      synchronize: true,
      logging: false,
    }),
    StationModule,
    TimeModule,
    PassengerModule,
  ],
})
export class AppModule {}
