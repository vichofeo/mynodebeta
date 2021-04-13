/* cardinalidad 
un cliente tiene varios pedido
un pedido tiene un solo cliente
=> 1:n cliente/pedido
un pedido tiene varios productos
*/
const mongoose = require("mongoose");
const schema = mongoose.Schema;

const pedidoSchema = schema({
    cliente: {
        type: Schema.ObjectId,
        ref: 'cliente', //nombre de la coleccion relacioanda
    },
    productos: [{
        producto: { type: Schema.ObjectId, ref: 'producto' },
        cantidad: Number
    }
    ],
    monto_total: { type: Number }

});

//transformacion a modelo
//crea el esquema en la base mongose
module.exports = mongoose.model("pedido", pedidoSchema);