import { ViewColumn, ViewEntity } from 'typeorm';

@ViewEntity({
  expression: `select Train_info.Train_id               as trainId,
                      d_station.Station_name            as destinationStationName,
                      s_station.Station_name            as startStationName,
                      Timetable.Arrival_time            as arrivalTime,
                      Timetable.Departure_time          as departureTime,
                      Timetable.Ticket_gate             as ticketGate,
                      Timetable.Status                  as status,
                      Train_info.Start_station_id       as startStationId,
                      Train_info.Destination_station_id as destinationStationId
               from Train_info,
                    Timetable,
                    Station as s_station,
                    Station as d_station
               where Train_info.Train_id = Timetable.Train_id
                 and Train_info.Destination_station_id = d_station.Station_id
                 and Train_info.Start_station_id = s_station.Station_id;`,
})
export class TimesEntity {
  @ViewColumn()
  trainId: number;
  @ViewColumn()
  destinationStationName: string;
  @ViewColumn()
  startStationName: string;
  @ViewColumn()
  arrivalTime: string;
  @ViewColumn()
  departureTime: string;
  @ViewColumn()
  ticketGate: string;
  @ViewColumn()
  status: string;
  @ViewColumn()
  startStationId: number;
  @ViewColumn()
  destinationStationId: number;
}
