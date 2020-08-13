CREATE DATABASE schooldb;
CREATE TABLE `Class` (
`id` int(10) unsigned not null auto_increment primary key,
`name` varchar(255) not null,
`begins` datetime not null,
`ends` datetime not null 
);
CREATE TABLE `student` (
`id` int(10) unsigned not null auto_increment primary key,
`name` varchar(255) not null,
`email` varchar(255) not null,
`phone` varchar(255) not null ,
`class_id` int unsigned not null  ,
 FOREIGN KEY (class_id) REFERENCES class (id)
);

create index name_index
on student (name);

ALTER TABLE  Class
add  status enum('not-started', 'ongoing', 'finished') not null;
select * from class