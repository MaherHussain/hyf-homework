

-- Find out how many tasks are in the task table
select count(id)
from task;

-- Find out how many tasks in the task table do not have a valid due date
select count(*)
from task
Where task.due_date is null;


-- Find all the tasks that are marked as done
select task.*
from task 
join status on  status.name ='done' and  status.id = task.status_id   ;

-- Find all the tasks that are not marked as done

select task.* 
from task 
join status on  status.name !='done' and  status.id = task.status_id   ;

-- Get all the tasks, sorted with the most recently created first
select *
from task 
order by created desc;

-- Get the single most recently created task

 select * 
from task 
order by created desc limit 1;

-- Get the title and due date of all tasks where the title or description contains database
select title , due_date FROM task
where title like '%database%' or description like '%database%';

-- Get the title and status (as text) of all tasks

select title , name 
from task
join status;

-- Get the name of each status, along with a count of how many tasks have that status

select  status.name,
count(task.status_id) as total_Tasks
from status 
join task on  status.id  = task.status_id
GROUP BY  status.name;

 -- Get the names of all statuses, sorted by the status with most tasks first
 
 select  status.name,
count(task.status_id) as total_Tasks
from status 
join task on  status.id  = task.status_id
GROUP BY  status.name
 order by total_Tasks desc;


