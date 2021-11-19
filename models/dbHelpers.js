const db = require("../config/db");

module.exports = {
    addTask,
    showTasks,
    deleteTask
}

// ,
//     editTask,
//     updateTask,
//     deleteTask

// async function addTask(newtask){
//     const [id] = await db('messages').insert(newtask);
//     return id;
// }

async function addTask(newTask){
    try {
        await db('tasks').insert(newTask);
    } 
    catch(err){
        if(err.code === 'ER_NO_SUCH_TABLE')
            await  db.schema.createTable('tasks', table => {
            table.increments(); // Me va aumentando el id 
            table.string('user', 128).notNullable();
            table.string('task', 1000).notNullable();
            table.boolean('check', 1000).notNullable();
            })
            await db('tasks').insert(newTask);
    }
}

async function showTasks(){
    try {
        let data = await db('tasks').select("id", "user", "task", "check");
        return data
    } 
    catch(err){
        console.log(err)
    }
}

async function deleteTask(numid){
    try {
        await db('tasks').where('id', numid).del()
    } 
    catch(err){
        console.log(err)
    }
}
