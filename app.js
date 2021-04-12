//imprortar modulos
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const config = require("./config/config");

//importar rutas
const router = require("./routes/index");

//conexion a mongodb base de datos

mongoose.connect('mongodb://localhost:27017/test2', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => {
        console.log("MONGO dB CONECTADO....");
    }).catch(error => {
        console.log("error de conexion....");
    })

//Configuracion:: importar archivo de configuracion
var app = express(); //inicializa exrpees
app.set('port', process.env.PORT || config.PORT); //agaraa el puerto del sistema

//middlewares
app.use(morgan('dev'));

//habilita peticione en formato json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//rutas
router.add(app);

//levartar server
app.listen(app.get("port"), () => {
    console.log("servidor en puerto: " + app.get("port"));
})