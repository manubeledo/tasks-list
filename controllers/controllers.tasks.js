const dbhelpers = require('../models/dbHelpers')


const created = async (req, res) => {
    try{
        const task = {
            user: "user", 
            task: req.body.newtask,
            check: false
        }
        await dbhelpers.addTask(task)
        let data = await dbhelpers.showTasks()
        res.render('index', {data: data});
    } catch (err){
        res.status(400).json(err.message)
    }
}

const checked = async (req, res) => {
    try{
        let data = await dbhelpers.updateTask(req.body.id)
        res.redirect('/api/tasks');
    } catch (err){
        res.status(400).json(err.message)
    }
}
        
const edited = async (req, res) => {
    try{
        id = req.body.idname
        newTask = req.body.newtask
        await dbhelpers.editTask(id, newTask)
        res.redirect('/api/tasks')
    } catch (err){
        res.status(400).json(err.message)
    }
}

const deleted = async (req, res) => {
    try{
        await dbhelpers.deleteTask(req.body.id)
        res.redirect('/')
    } catch (err){
        res.status(400).json(err.message)
    }
}

const rendered = async (req, res) => {
    try{
        let data = await dbhelpers.showTasks()
        res.render('index', {data: data})
    } catch (err){
        res.status(400).json(err.message)
    }
}

module.exports = {
    created,
    checked,
    edited,
    deleted,
    rendered
}

