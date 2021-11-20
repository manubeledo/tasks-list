const { Router } = require("express");
const router = Router();
const controller = require('../controllers/controllers.tasks');

function serverRouter(app){
    app.use("/api/tasks", router);
    
    router.get('/', controller.rendered)
    router.post('/', controller.created)
    router.post('/edit', controller.edited)
    router.post('/delete', controller.deleted)
    router.post('/checked', controller.checked)

}

module.exports = serverRouter;
