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
  trainId: string | undefined;
  @Column({
    length: 10,
    name: 'Train_type',
    nullable: false,
    type: 'varchar',
  })
  trainType: string | undefined;
  @Column({
    length: 20,
    name: 'Model',
    nullable: true,
    type: 'varchar',
  })
  model: string | undefined;
  @ManyToOne(() => StationEntity, (station) => station.startTrainInfos, { cascade: true })
  @JoinColumn({ name: 'Start_station_id' })
  startStation: StationEntity | undefined;
  @ManyToOne(() => StationEntity, (station) => station.destinationTrainInfos, { cascade: true })
  @JoinColumn({ name: 'Destination_station_id' })
  destinationStation: StationEntity | undefined;
  @OneToMany(() => TimeTableEntity, (timetable) => timetable.trainInfo)
  timeTables: TimeTableEntity[] | undefined;
  @OneToMany(() => TravelInfoEntity, (travelInfo) => travelInfo.trainInfo)
  travelInfos: TravelInfoEntity[] | undefined;
}
