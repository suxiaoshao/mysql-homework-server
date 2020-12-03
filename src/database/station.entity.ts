import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TrainInfoEntity } from './trainInfo.entity';
import { TravelInfoEntity } from './travelInfo.entity';

@Entity({ name: 'Station' })
export class StationEntity {
  @PrimaryGeneratedColumn({
    name: 'Station_id',
  })
  stationId: number | undefined;
  @Column({
    length: 30,
    name: 'Station_name',
    nullable: false,
    type: 'varchar',
  })
  stationName: string | undefined;
  @Column({
    length: 20,
    name: 'Phone_number',
    nullable: false,
    type: 'varchar',
  })
  phoneNumber: string | undefined;
  @OneToMany(() => TrainInfoEntity, (trainInfo) => trainInfo.startStation)
  startTrainInfos: TrainInfoEntity | undefined;
  @OneToMany(() => TrainInfoEntity, (trainInfo) => trainInfo.destinationStation)
  destinationTrainInfos: TrainInfoEntity | undefined;
  @OneToMany(() => TravelInfoEntity, (travelInfo) => travelInfo.departureStation)
  departureTravelInfos: TravelInfoEntity[] | undefined;
  @OneToMany(() => TravelInfoEntity, (travelInfo) => travelInfo.arrivalStation)
  arrivalTravelInfos: TravelInfoEntity[] | undefined;
}
