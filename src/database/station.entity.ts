import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TrainInfoEntity } from './trainInfo.entity';
import { TravelInfoEntity } from './travelInfo.entity';

@Entity({ name: 'Station' })
export class StationEntity {
  @PrimaryGeneratedColumn({
    name: 'Station_id',
  })
  stationId: number;
  @Column({
    length: 30,
    name: 'Station_name',
    nullable: false,
  })
  stationName: string;
  @Column({
    length: 20,
    name: 'Phone_number',
    nullable: false,
  })
  phoneNumber: string;
  @OneToMany(() => TrainInfoEntity, (trainInfo) => trainInfo.startStation)
  startTrainInfos: TrainInfoEntity;
  @OneToMany(() => TrainInfoEntity, (trainInfo) => trainInfo.destinationStation)
  destinationTrainInfos: TrainInfoEntity;
  @OneToMany(() => TravelInfoEntity, (travelInfo) => travelInfo.departureStation)
  departureTravelInfos: TravelInfoEntity[];
  @OneToMany(() => TravelInfoEntity, (travelInfo) => travelInfo.arrivalStation)
  arrivalTravelInfos: TravelInfoEntity[];
}
