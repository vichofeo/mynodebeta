const mongoose = require("mongoose");
const schema = mongoose.Schema;

const clienteSchema = schema({
    nombre: { type: String, trim: true }, //String, 
    apellido: { type: String, trim: true },
    empresa: { type: String, trim: true },
    email: { type: String, unique: true, lowercase: true, trim: true },
    telefono: {type:String, trim:true}

});

//transformacion a modelo
//crea el esquema en la base mongose
module.exports = mongoose.model("cliente",clienteSchema);