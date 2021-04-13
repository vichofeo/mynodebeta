const mongoose = require("mongoose");
const schema = mongoose.Schema;

const productoSchema = schema({
    nombre: { type: String, trim: true }, //String, 
    precio: { type: Number },
    imagen: { type: String},
    detalle: { type: String, trim: true },
    

});

//transformacion a modelo
//crea el esquema en la base mongose
module.exports = mongoose.model("producto",productoSchema);