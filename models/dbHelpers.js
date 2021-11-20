const db = require("../config/db");

module.exports = {
    addTask,
    showTasks,
    deleteTask,
    updateTask,
    takeTask,
    editTask
}

async function addTask(newTask){
    try {
        await db('tasks').insert(newTask);
    } 
    catch(err){
            console.log("ERROR DESDE addTask", err);
    }
}

async function showTasks(){
    try {
        let data = await db('tasks').whereNot('id', 0);
        return data
    } 
    catch(err){
        if(err.code === 'ER_NO_SUCH_TABLE')
            await  db.schema.createTable('tasks', table => {
            table.increments(); // Me va aumentando el id 
            table.string('user', 128).notNullable();
            table.string('task', 1000).notNullable();
            table.boolean('check', 1000).notNullable();
            })
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

async function updateTask(numid){
    try {
        let data = await db('tasks').select("id", "user", "task", "check").where({id : numid})
        await db('tasks').where('id', numid).del()
        if(data[0].check == 1){
            data[0].check = 0
        } else {
            data[0].check = 1
        }
        await addTask(data)
    } 
    catch(err){
        console.log(err)
    }
}

async function takeTask(numid){
    try {
        let data = await db('tasks').select("id", "user", "task", "check").where({id : numid})
        return data
    } 
    catch(err){
        console.log(err)
    }
}

async function editTask(numid, newTask){
    try {
        let data = await db('tasks').select("id", "user", "task", "check").where({id : numid})
        await db('tasks').where('id', numid).del()
        data[0].task = newTask
        await addTask(data)
        await showTasks()
    } 
    catch(err){
        console.log(err)
    }
}
