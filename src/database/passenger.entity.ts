import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { TravelInfoEntity } from './travelInfo.entity';

@Entity({ name: 'Passenger' })
export class PassengerEntity {
  @PrimaryColumn({
    name: 'Passenger_id',
    type: 'int',
  })
  passengerId: number | undefined;
  @Column({
    length: 18,
    name: 'ID_number',
    nullable: false,
    type: 'varchar',
  })
  idNumber: string | undefined;
  @Column({
    length: 30,
    name: 'Passenger_name',
    nullable: false,
    type: 'varchar',
  })
  passengerName: string | undefined;
  @Column({
    length: 2,
    name: 'Gender',
    nullable: false,
    type: 'varchar',
  })
  gender: string | undefined;
  @Column({
    length: 11,
    name: 'Phone_number',
    nullable: false,
    type: 'varchar',
  })
  phoneNumber: string | undefined;
  @OneToMany(() => TravelInfoEntity, (travelInfo) => travelInfo.passenger)
  travelInfos: TravelInfoEntity[] | undefined;
}
