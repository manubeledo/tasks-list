const { Router } = require("express");
const router = Router();
const controller = require('../controllers/controllers.tasks');
const dbhelpers = require('../models/dbHelpers')

let data = dbhelpers.showTasks();

function serverRouter(app){
    app.use("/api/tasks", router);
    

    router.get("/", (req, res) => {
        console.log(data)
        res.render('index', {data: data})
    })
    router.post('/', controller.created);
    router.post('/delete', controller.deleted);
    // router.post('/edit', controller.edited);

}

module.exports = serverRouter;
