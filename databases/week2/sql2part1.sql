
-- 1.working with task 
-- adding row
insert into  task (title, description, created, updated, due_date, status_id, user_id)
values ("palying music","some description", now(), now(),null,2,1);



-- 2.changing the title
update task 
set title = "palying football"
where id = 36;


-- 3.changing the due_date
update task 
set due_date = '2017-10-15 13:05:09'
where id = 36;

-- 4.changing task status
update task 
set status_id = '1'
where id = 36;

-- 5.mark  status as completed
update task 
set status_id = '3'
where id = 36;


-- 6.delete the task
delete from task where id = 36; 
delete from task where id = 52;
select * from task;
