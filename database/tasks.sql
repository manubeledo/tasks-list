-- show tasks

db('tasks').select("id", "user", "task", "check");

-- insert item

db('tasks').insert(newTask);

-- delete task

db('tasks').where('id', numid).del()


