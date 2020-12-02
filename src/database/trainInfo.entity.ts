import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { StationEntity } from './station.entity';
import { TimeTableEntity } from './timeTable.entity';
import { TravelInfoEntity } from './travelInfo.entity';

@Entity({ name: 'Train_info' })
export class TrainInfoEntity {
  @PrimaryColumn({
    name: 'Train_id',
    length: 10,
  })
  trainId: string;
  @Column({
    length: 10,
    name: 'Train_type',
    nullable: false,
  })
  trainType: string;
  @Column({
    length: 20,
    name: 'Model',
    nullable: true,
  })
  model: string;
  @ManyToOne(() => StationEntity, (station) => station.startTrainInfos)
  @JoinColumn({ name: 'Start_station_id' })
  startStation: StationEntity;
  @ManyToOne(() => StationEntity, (station) => station.destinationTrainInfos)
  @JoinColumn({ name: 'Destination_station_id' })
  destinationStation: StationEntity;
  @OneToMany(() => TimeTableEntity, (timetable) => timetable.trainInfo)
  timeTables: TimeTableEntity[];
  @OneToMany(() => TravelInfoEntity, (travelInfo) => travelInfo.trainInfo)
  travelInfos: TravelInfoEntity[];
}
