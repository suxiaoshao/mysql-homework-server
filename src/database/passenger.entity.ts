import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { TravelInfoEntity } from './travelInfo.entity';

@Entity({ name: 'Passenger' })
export class PassengerEntity {
  @PrimaryColumn({
    name: 'Passenger_id',
  })
  passengerId: number;
  @Column({
    length: 18,
    name: 'ID_number',
    nullable: false,
  })
  idNumber: string;
  @Column({
    length: 30,
    name: 'Passenger_name',
    nullable: false,
  })
  passengerName: string;
  @Column({
    length: 2,
    name: 'Gender',
    nullable: false,
  })
  gender: string;
  @Column({
    length: 11,
    name: 'Phone_number',
    nullable: false,
  })
  phoneNumber: string;
  @OneToMany(() => TravelInfoEntity, (travelInfo) => travelInfo.passenger)
  travelInfos: TravelInfoEntity[];
}
