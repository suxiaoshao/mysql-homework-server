use station_db;
/* 插入车站数据*/
insert Station(Station_name, Phone_number)
values ('北京南', '010-12306'),
       ('天津西', '010-12306'),
       ('广州南', '020-12306'),
       ('深圳北', '020-12306'),
       ('上海虹桥', '021-12306'),
       ('南京南', '021-12306'),
       ('杭州东', '021-12306'),
       ('徐州', '021-12306'),
       ('徐州东', '021-12306'),
       ('亳州南', '021-12306'),
       ('成都东', '028-12306'),
       ('成都', '028-12306'),
       ('重庆西', '028-12306'),
       ('济南西', '0531-12306'),
       ('南昌西', '0791-12306'),
       ('景德镇北', '0791-12306'),
       ('福州', '0791-12306'),
       ('福州南', '0791-12306'),
       ('厦门', '0791-12306'),
       ('厦门北', '0791-12306'),
       ('福鼎', '0791-12306'),
       ('汉口', '027-12306'),
       ('兰州西', '0931-12306'),
       ('昆明南', '0871-12306'),
       ('郑州东', '0371-12306'),
       ('乌鲁木齐', '0991-12306');

/*插入列车数据*/
insert Train_info(Train_id, Train_type, Model, Start_station_id, Destination_station_id)
values ('G1672', '高铁', 'CRH380A', 17, 6),
       ('D3333', '动车', 'CRH2A', 18, 4),
       ('D2242', '动车', 'CRH2A', 17, 11),
       ('K804', '快速', '25G', 17, 13),
       ('G1902', '高铁', 'CRH380A', 17, 23),
       ('D3234', '动车', 'CRH2A', 19, 7),
       ('G2046', '高铁', 'CRH380AL', 20, 25),
       ('T306', '特快', '25K', 17, 26),
       ('G330', '高铁', 'CRH380BL', 17, 2),
       ('Z392', '直达', '25T', 17, 12),
       ('K1268', '快速', '25G', 17, 13),
       ('G648', '高铁', 'CRH380A', 17, 25),
       ('G1652', '高铁', 'CRH380AL', 19, 5),
       ('G356', '高铁', 'CRH380A', 20, 1),
       ('D377', '动卧', 'CRH1E', 5, 4),
       ('G1602', '高铁', 'CR400BF-A', 4, 10),
       ('D3263', '动车', 'CRH2A重联', 22, 17),
       ('G348', '高铁', 'CRH380BL', 17, 14),
       ('D2288', '动车', 'CRH2A', 4, 5),
       ('G1670', '高铁', 'CR400BF', 20, 9),
       ('G1659', '高铁', 'CRH380AL', 5, 19),
       ('G2045', '高铁', 'CRH380AL', 25, 20),
       ('G9873', '高铁', 'CRH380A', 16, 19),
       ('G1633', '高铁', 'CRH380D', 5, 17),
       ('D2306', '动车', 'CRH1A-A', 4, 18),
       ('G1668', '高铁', 'CR400BF', 20, 6),
       ('G27', '高铁', 'CRH380B', 1, 17),
       ('G55', '高铁', 'CRH380B', 1, 17),
       ('G329', '高铁', 'CRH380BL', 2, 17),
       ('D3233', '动车', 'CRH2A', 7, 19),
       ('G1755', '高铁', 'CRH380AL', 11, 18),
       ('G301', '高铁', 'CRH380A', 1, 18),
       ('G1901', '高铁', 'CRH380A', 23, 17),
       ('D6228', '动车', 'CRH1A', 19, 17),
       ('G1697', '高铁', 'CRH380A', 24, 17),
       ('C9537', '城际', 'CRH1A', 21, 20);

/*插入时刻数据*/
insert Timetable(Train_id, Arrival_time, Departure_time, Ticket_gate, Type, Status)
values ('G1672', '', '06:48', '03', '高铁', '正点'),
       ('D3333', '', '06:51', '01', '动车', '正点'),
       ('D2242', '', '06:55', '04', '动车', '正点'),
       ('K804', '', '07:59', '08', '快速', '正点'),
       ('G1902', '', '08:13', '02', '高铁', '正点'),
       ('D3234', '08:45', '08:49', '01', '动车', '正点'),
       ('G2046', '08:50', '08:53', '03', '高铁', '正点'),
       ('T306', '', '09:08', '02', '特快', '正点'),
       ('G330', '', '09:58', '06', '高铁', '正点'),
       ('Z392', '', '10:36', '04', '直达', '正点'),
       ('K1268', '', '10:36', '04', '快速', '正点'),
       ('G648', '', '10:45', '03', '高铁', '正点'),
       ('G1652', '10:45', '10:51', '06', '高铁', '晚点1分钟'),
       ('G356', '12:47', '12:52', '01', '高铁', '正点'),
       ('D377', '14:09', '14:13', '05', '动卧', '正点'),
       ('G1602', '14:29', '14:33', '01', '高铁', '晚点2分钟'),
       ('D3263', '', '14:52', '', '动车', '晚点3分钟'),
       ('G348', '', '15:03', '09', '高铁', '正点'),
       ('D2288', '16:09', '16:18', '01', '动车', '正点'),
       ('G1670', '16:38', '16:44', '02', '高铁', '正点'),
       ('G1659', '16:50', '16:54', '04', '高铁', '正点'),
       ('G2045', '16:53', '16:55', '01', '高铁', '晚点1分钟'),
       ('G9873', '17:12', '17:18', '06', '高铁', '正点'),
       ('G1633', '17:22', '', '', '高铁', '晚点2分钟'),
       ('D2306', '17:24', '', '', '动车', '正点'),
       ('G1668', '17:20', '17:24', '05', '高铁', '晚点3分钟'),
       ('G27', '17:37', '', '', '高铁', '正点'),
       ('G55', '18:59', '', '', '高铁', '正点'),
       ('G329', '19:25', '', '', '高铁', '晚点1分钟'),
       ('D3233', '19:40', '19:53', '03', '动车', '正点'),
       ('G1755', '20:07', '', '', '高铁', '正点'),
       ('G301', '20:12', '', '', '高铁', '正点'),
       ('G1901', '21:28', '', '', '高铁', '正点'),
       ('D6228', '21:42', '', '', '动车', '正点'),
       ('G1697', '22:02', '', '', '高铁', '正点'),
       ('C9537', '22:21', '', '', '城际', '正点');
/* 插入乘客数据*/
insert Passenger(Passenger_id, ID_number, Passenger_name, Gender, Phone_number)
values (10001, '13333333', '苏少', '女', '10086'),
       (10002, '13333355', '苏小少', '男', '10000'),
       (10008, '13333288', '刘六', '男', '110'),
       (10009, '55333333', '朱元璋', '女', '120');

/* 插入旅行信息记录 */
insert Travel_info(Order_id, Passenger_id, Train_id, Departure_station_id, Arrival_station_id, Ticket_type, Ticket_price)
values ('00002', 10001, 'G356', 17, 1, '一等座', '1210.5'),
       ('00011', 10008, 'G1633', 5, 17, '商务座', '1180.5'),
       ('00028', 10002, 'T306', 17, 26, '硬座', '402.5'),
       ('00031', 10009, 'D3263', 22, 17, '二等座', '280.0'),
       ('00032', 10009, 'Z392', 17, 12, '硬卧', '434.5')