const serverRoutes = require("./routes/routes");
const express = require('express');
const cors = require('cors');
const path = require("path");
const morgan = require('morgan');
const PORT = 8080;

const app = express();

app.use("/", express.static(path.join(__dirname + '/public')));
app.use("/api/task", express.static('/public/css'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.set("view engine", "ejs");
app.set("views", "./public");

app.get("/", (req, res) =>{
    res.send("Desde la raiz del server");
})

app.listen(PORT, () => {
    console.log(`Servidor funcionando en la URL http://localhost:${PORT}/api/tasks`);
})

serverRoutes(app);
