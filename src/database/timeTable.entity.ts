import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TrainInfoEntity } from './trainInfo.entity';

@Entity('Timetable')
export class TimeTableEntity {
  @PrimaryGeneratedColumn({ name: 'Info_id' })
  infoId: number;
  @Column({ name: 'Arrival_time' })
  arrivalTime: string;
  @Column({ name: 'Departure_time' })
  departureTime: string;
  @Column({ name: 'Ticket_gate', length: 20 })
  ticketGate: string;
  @Column({ name: 'Type', length: 10 })
  typeName: string;
  @Column({ name: 'Status' })
  status: string;
  @ManyToOne(() => TrainInfoEntity, (trainInfo) => trainInfo.timeTables)
  @JoinColumn({ name: 'Train_id' })
  trainInfo: TrainInfoEntity;
}
