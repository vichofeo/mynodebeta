//modelo producto controller

var productos = [];

function listar(req, res, next) {
    res.json({ datos: productos });
}

function mostrar(req, res, next) {
    //ide de mostrar
    var id = req.params.id;

    res.json({ dato: productos[id] });
}


function guardar(req, res, next) {
    productos.push(req.body);

    res.json({ mensaje: "exito guadado producto" });
}

function modificar(req, res, next) {
    var id = req.params.id;
    productos[id] = req.body;
    

    res.json({ mensaje: "producto modificado" });
}

function eliminar(req, res, next) {

    var id = req.params.id;
    productos.splice(id,1);
    

    res.json({ mensaje: "producto eliminado" });
}


//exportracion del modulo
module.exports = {
    listar,
    mostrar,
    guardar,
    modificar,
    eliminar
}