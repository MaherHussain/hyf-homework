use  mealsharing;
-- Get meals that has a price smaller than a specific price fx 90
select * from meals
where price  < 50;
-- Get meals that still has available reservations

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde

select * from meals 
where title like "Beauty%" ;
select * from meals;
-- Get meals that has been created between two dates
select * from meals 
where `when` between '2020-05-01 00:00:00' and '2020-05-11 00:47:15';

-- Get only specific number of meals fx return only 5 meals
select * from meals
limit 3;

-- Get the meals that have good reviews
select meals.* from meals
join reviews 
where meals.id = reviews.meal_id
and reviews.stars > 4;

-- Get reservations for a specific meal sorted by created_date
select reservations.* from reservations
join meals 
where reservations.meal_id = meals.id 
order by reservations.created_date desc;


-- Sort all meals by average number of stars in the reviews
select meals.* , avg(reviews.stars) as avrg
from meals
join reviews on meals.id = reviews.meal_id
group by meals.id;

