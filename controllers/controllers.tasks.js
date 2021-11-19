const dbhelpers = require('../models/dbHelpers')


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
        console.log(data);
        res.render('index', {data: data});
    } catch (err){
        res.status(400).json(err.message)
    }
}

module.exports = {
    created,
}

