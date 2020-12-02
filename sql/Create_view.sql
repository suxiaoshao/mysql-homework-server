drop view if exists Travel_details;
drop view if exists Times;
/* 创建个人行程详情视图,用来查询某乘客出行所需的详细信息 */
create view Travel_details as
select Passenger.Passenger_name,
       Travel_info.Order_id,
       d_station.Station_name as Departure_station_name,
       a_station.Station_name as Arrival_station_name,
       Travel_info.Train_id   as Train_id,
       Timetable.Departure_time,
       Timetable.Arrival_time,
       Timetable.Ticket_gate
from Passenger,
     Travel_info,
     Timetable,
     Station as a_station,
     Station as d_station
where Timetable.Train_id = Travel_info.Train_id
  and Travel_info.Passenger_id = Passenger.Passenger_id
  and Travel_info.Departure_station_id = d_station.Station_id
  and Travel_info.Arrival_station_id = a_station.Station_id;

# 创建时刻视图
create view Times as
select Train_info.Train_id,
       d_station.Station_name as Destination_station_name,
       s_station.Station_name as Start_station_name,
       Timetable.Arrival_time,
       Timetable.Departure_time,
       Timetable.Ticket_gate,
       Timetable.Status
from Train_info,
     Timetable,
     Station as s_station,
     Station as d_station
where Train_info.Train_id = Timetable.Train_id
  and Train_info.Destination_station_id = d_station.Station_id
  and Train_info.Start_station_id = s_station.Station_id;