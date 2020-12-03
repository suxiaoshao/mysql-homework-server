import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TrainInfoEntity } from './trainInfo.entity';

@Entity('Timetable')
export class TimeTableEntity {
  @PrimaryGeneratedColumn({ name: 'Info_id' })
  infoId: number | undefined;
  @Column({ name: 'Arrival_time', type: 'time', nullable: false })
  arrivalTime: Date | undefined;
  @Column({ name: 'Departure_time', type: 'time', nullable: false })
  departureTime: Date | undefined;
  @Column({ name: 'Ticket_gate', length: 20, type: 'varchar' })
  ticketGate: string | undefined;
  @Column({ name: 'Type', length: 10, type: 'varchar' })
  typeName: string | undefined;
  @Column({ name: 'Status', length: 10, type: 'varchar' })
  status: string | undefined;
  @ManyToOne(() => TrainInfoEntity, (trainInfo) => trainInfo.timeTables, { nullable: false })
  @JoinColumn({ name: 'Train_id' })
  trainInfo: TrainInfoEntity;
}
