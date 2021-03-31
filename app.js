var express = require('express');
var morgan = require('morgan');

//importando archivos de rutas
let productoRuter = require('./routes/productos');
let usersRouter = require('./routes/users');

//config express
var app= express();
app.use(morgan('dev'));

//habilita peticione en formato json
app.use(express.json());
app.use(express.urlencoded({extended:true}));

var port= 4000;
var host = '127.0.0.1';

//habilitacion de rutas
app.use("/producto", productoRuter);
app.use("/user", usersRouter);

app.listen(port,host, ()=>{
    console.log(`servicdor activo http://${host}:${port}`);
})