import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { PassengerEntity } from './passenger.entity';
import { TrainInfoEntity } from './trainInfo.entity';
import { StationEntity } from './station.entity';

@Entity('Travel_info')
export class TravelInfoEntity {
  @PrimaryColumn({ name: 'Order_id', length: 30, type: 'varchar' })
  orderId: string | undefined;
  @Column({ name: 'Ticket_type', length: 10, nullable: false, type: 'varchar' })
  ticketType: string | undefined;
  @Column({ name: 'Ticket_price', type: 'float' })
  ticketPrice: number | undefined;
  @ManyToOne(() => PassengerEntity, (passenger) => passenger.travelInfos)
  @JoinColumn({ name: 'Passenger_id' })
  passenger: PassengerEntity | undefined;
  @ManyToOne(() => TrainInfoEntity, (trainInfo) => trainInfo.travelInfos)
  @JoinColumn({ name: 'Train_id' })
  trainInfo: TrainInfoEntity | undefined;
  @ManyToOne(() => StationEntity, (station) => station.departureTravelInfos)
  @JoinColumn({ name: 'Departure_station_id' })
  departureStation: StationEntity | undefined;
  @ManyToOne(() => StationEntity, (station) => station.arrivalTravelInfos)
  @JoinColumn({ name: 'Arrival_station_id' })
  arrivalStation: StationEntity | undefined;
}
