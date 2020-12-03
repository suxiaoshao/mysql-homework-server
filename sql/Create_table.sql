drop table if exists Timetable;
drop table if exists Travel_info;
drop table if exists Train_info;
drop table if exists Passenger;
drop table if exists Station;

/*创建车站表 */
create table Station
(
    Station_id   int primary key auto_increment,/*序号自增 */
    Station_name varchar(30) not null,
    Phone_number varchar(20) not null
);

/*新建列车表*/
create table Train_info
(
    Train_id               varchar(10) primary key,
    Train_type             varchar(10) not null,
    Model                  varchar(20),
    Start_station_id       int         not null,
    Destination_station_id int         not null,
    foreign key (Start_station_id) references Station (Station_id),
    foreign key (Destination_station_id) references Station (Station_id)
);

/*新建时刻表 */
create table Timetable
(
    Info_id        int primary key auto_increment,/*序号自增 */
    Arrival_time   time,
    Departure_time time,
    Ticket_gate    varchar(20),
    Type           varchar(10) not null,
    Status         varchar(10) not null,
    Train_id       varchar(10) not null,
    foreign key (Train_id) references Train_info (Train_id)
);

/*新建乘客表*/
create table Passenger
(
    Passenger_id   int primary key,
    ID_number      varchar(18) not null,
    Passenger_name varchar(30) not null,
    Gender         varchar(2)  not null,
    Phone_number   varchar(11) not null
);

/* 新建行程信息表*/
create table Travel_info
(
    Order_id             varchar(30) primary key,
    Ticket_type          varchar(10) not null,
    Ticket_price         float check (Ticket_price > 0),
    Passenger_id         int         not null,
    Train_id             varchar(10) not null,
    Departure_station_id int         not null,
    Arrival_station_id   int         not null,
    foreign key (Passenger_id) references Passenger (Passenger_id),
    foreign key (Train_id) references Train_info (Train_id),
    foreign key (Departure_station_id) references Station (Station_id),
    foreign key (Arrival_station_id) references Station (Station_id)
);


# /*创建行程信息索引 */
# create unique index oid on Travel_info (Order_id);
# /*创建列车索引 */
# create unique index tid on Train_info (Train_id);