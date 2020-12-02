/* 添加查询从福州始发的所有列车的储存过程 */
create procedure search_Fuzhou_start()
begin
    select *
    from Train_info
    where Start_station LIKE '福州%';
end;
/* 添加查询终到福州的所有列车的储存过程 */
create procedure search_Fuzhou_destination()
begin
    select *
    from Train_info
    where Destination_station LIKE '福州%';
end;

/* 添加查询(筛选)所有复兴号列车的储存过程 */
create procedure search_Fuxing()
begin
    select *
    from Train_info
    where Model LIKE 'CR400%';
end;

/* 添加查询(筛选)所有和谐号列车的储存过程 */
create procedure search_Harmony()
begin
    select *
    from Train_info
    where Model LIKE 'CRH%';
end;

/* 添加查询(筛选)所有高铁/动车的储存过程 */
create procedure search_high_speed()
begin
    select *
    from Train_info
    where Train_id LIKE 'G%'
       OR 'D%'
       OR 'C%';
end;