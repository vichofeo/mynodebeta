const mongoose = require("mongoose");

//creacion del esquema de una coleccion
const Schema = mongoose.Schema;//declara objeto

const usuarioSchema = new Schema({
    usuario: String,
    email: String,
    estado: {
        type: Boolean,
        default: true
    },
    password: String
});

module.exports = mongoose.model('usuario', usuarioSchema);