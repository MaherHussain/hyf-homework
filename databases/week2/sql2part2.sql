CREATE DATABASE schooldb;
CREATE TABLE `class` (
`id` int(10) unsigned not null auto_increment primary key,
`name` varchar(255) not null,
`begins` datetime not null,
`ends` datetime not null

);
CREATE TABLE `student` (
`id` int(10) unsigned not null auto_increment primary key,
`name` varchar(255) not null,
`email` varchar(255) not null,
`phone` varchar(255) not null 

);
create table `student-classes` (
`id` int(10) unsigned not null auto_increment primary key,
`class_id` int not null,
`student_id`int not null,
FOREIGN KEY (class_id) REFERENCES class (id),
FOREIGN KEY (student_id) REFERENCES student (id)
);

create index name_index
on student (name);

ALTER TABLE  class
add  status enum('not-started', 'ongoing', 'finished') not null default 'ongoing';
insert into class (name, begins,ends)
values ('class1',date('2020-4-12'),date('2020-10-12'));
select * from class

