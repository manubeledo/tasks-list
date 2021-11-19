const { Router } = require("express");
const router = Router();
const controller = require('../controllers/controllers.tasks');
const dbhelpers = require('../models/dbHelpers')

function serverRouter(app){
    app.use("/api/tasks", router);
    
    router.get("/", async (req, res, next) => {
        let data = await dbhelpers.showTasks()
        res.render('index', {data: data})
    })
    router.post('/delete', async (req, res) => {
        await dbhelpers.deleteTask(req.body.id)
        res.redirect('/')
    })
    router.post('/', controller.created);
    router.post('/checked', controller.checked);
    router.post('/edit', controller.edited);


    // router.post('/edit', controller.edited);
}

module.exports = serverRouter;
