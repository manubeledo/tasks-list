const dbhelpers = require('../models/dbHelpers')

const refresh = async (req, res) => {
    try{
        let data = await dbhelpers.showTasks()
        res.render('index', {data: data});
    } catch (err){
        res.status(400).json(err.message)
    }
}

// Despues modificar como escribir la tarea.
const created = async (req, res) => {
    try{
        const task = {
            user: "user", 
            task: req.body.newtask,
            check: true
        }
        await dbhelpers.addTask(task)
        let data = await dbhelpers.showTasks()
        res.render('index', {data: data});
    } catch (err){
        res.status(400).json(err.message)
    }
}

const deleted = async (req, res) => {
    try{
        const task = req.body.id
        await dbhelpers.deleteTask(task);
        let data = await dbhelpers.showTasks();
        res.redirect('/'); //PROBLEMA
    }
    catch(err){
        res.status(400).json(err.message)
    }
}

module.exports = {
    created,
    deleted,
    refresh
}

