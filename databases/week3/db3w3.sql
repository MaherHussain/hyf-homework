create database mealsharing;
use mealsharing;
create Table Meal(
 `id` int not null unique primary key auto_increment ,
 `title` varchar(255) not null,
 `description` text,
 `location` varchar(255),
 `when` datetime not null ,
 `max_reservations` int(10) not null default(10),
 `price` decimal not null,
 `created_date` date not null
);
create Table Reservation(
 `id` int not null unique primary key auto_increment,
 `number_of_guests` int not null,
 `meal_id` int not null,
 `created_date` date not null,
 `contact_phonenumber` varchar(20),
 `contact_name` varchar(255) not null ,
 `contact_email` varchar(255),
 foreign key (meal_id) references meal (id)
 on delete cascade on update cascade
);


create Table Review(
 `id` int not null unique primary key auto_increment,
 `title` varchar(255) not null ,
 `description` text not null ,
 `meal_id` int not null,
 `stars` int ,
 `created_date` date,
 foreign key (meal_id) references meal (id)
 on delete cascade on update cascade
);
insert into meal
values(1,"Beauty Prize","Displ transverse fx l patella, subs for clos fx w nonunion","Canada",9/14/2019,8,16.47,6/4/2020);

insert into meal
values (2,"Gaucho, The","Sltr-haris Type II physeal fx upper end of r fibula, sequela","Iran",2019-05-05,2,77.96,now());
-- get all from meal tb
select * from meal;

-- insert row to meal tb
insert into meal 
values(3,"Gaucho, The","Sltr-haris Type II physeal fx upper end of r fibula, sequela","Iran",8/17/2019,2,77.96,10/30/2019);


-- Get a meal with any id, fx 1
select * from meal
where id = 1;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
update meal
set `when`= '2020-05-01',  created_date = now()
where id = 1;
update meal
set `when`= '2020-05-02',  created_date = now()
where id = 2;
update meal
set `when`= '2020-05-03',  created_date = now()
where id = 3;

-- Delete a meal with any id, fx 1
delete from meal where id = 32;
-- rename tables 
rename table meal to meals;
rename table reservation to reservations; 
rename table review to reviews; 


-- add some reservations
insert into reservation( number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
values(3, 1, '2018-05-15', '07777777', 'nuh kjikjs', 'abs@gmail.com');
insert into reservation( number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
values(5, 2, '2018-05-15', '077755577', 'kjikjs', 'abs@gmail.com');
insert into reservation( number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
values(3, 3, '2018-05-15', '0126564777', 'nuh kjjhhkjs', 'abs@gmail.com');

-- get all reservations 
select * from reservation;

-- Get a reservation with any id, fx 1
select * from reservation
where id = 2;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes

update reservations
set number_of_guests= '6',  contact_name = "Maher"
where id = 3;

-- Delete a reservation with any id, fx 1
delete from reservations where id = 1;

-- add some reviews 
insert into reviews values(1,"very good", "some description", 1,5, "2020-08-18");
insert into reviews values(2,"good", "some description", 2, 4,"2020-08-19");
insert into reviews values(3,"bad", "some description", 3,3,"2020-08-20");

-- get all reviews 
select * from reviews;

-- update reviews table
update reviews
set description= ' description 1'
where id = 1;

delete from reviews where id = 2;