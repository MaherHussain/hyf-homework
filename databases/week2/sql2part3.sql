-- Get all the tasks assigned to users whose email ends in @spotify.com
select * from user
where email like '%@spotify.com';

-- Get all the tasks for 'Donald Duck' with status 'Not started'
select  task.* from task
join user on user.name ="Donald Duck" and user.id = task.user_id
join status on status.name ='Not started' and status.id = task.status_id;

-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
select  task.* from task

join user on user.name ="Maryrose Meadows" and user.id = task.user_id
where month(task.created) = 9;

-- Find how many tasks where created in each month7
 select  month(created) month ,
 count(*) as tasks
 from task

GROUP BY  month(created)
order by month asc;







 