//importando modulo de encriptado
var bcrypt = require("bcrypt");

//importando el model usuario

const UsuarioModel = require("../models/UsuarioModel");

//listar
async function listar(req, res) {
    const datos = await UsuarioModel.find();
    res.json(datos);
}


//guardar crear
async function guardar(req, res) {

    //verificacion por correo
    var email = req.body.email;
    const usr = await UsuarioModel.find({ email: email });
    if (usr.length > 0) {
        res.json({
            mensaje: "Usuario email YA ESTA RESGITRADO"
        });
    } else {
        //procesando contrasenia
        var tempUsr = {};
        var BCRYPT_SALT_ROUNDS = 12;
        var passHash = await bcrypt.hash(req.body.password, BCRYPT_SALT_ROUNDS)

        console.log(passHash);
        /*tempUsr = {
            usuario: req.body.usuario,
            email: req.body.email,
            estado: req.body.estado,
            password: passHash
        };*/

        req.body.password = passHash;
        var us = new UsuarioModel(req.body);
        await us.save();
        res.json({
            mensaje: "ESTA REGIsTRANDO a usuario NUEVO"
        });
    }

}

//mostrar-buscar por id
async function mostrar(req, res) {
    //var mail = req.body.email;
    var id = req.params.id;

    try {
        const user = await UsuarioModel.findById(id)

        if (user) {
            res.json({
                mensaje: "usuario HALLADO"
            })
        } else {
            res.json({
                mensaje: "NO ENCONTRADO"
            })
        }
    } catch (error) {
        console.log("error en la busqueda" + error);
        const err = await res.status(404);
        res.json({
            estado: 404,
            mensaje: "404... error en busqueda"
        });
    }

}

//modificar por id
async function modificar(req, res) {
    var id = req.params.id;
    await UsuarioModel.updateOne({ _id: id }, req.body);
    res.json({ mensaje: "usuarioos modificado" });
}

//eliminar por id
async function eliminar(req, res) {
    var id = req.params.id;
    await UsuarioModel.remove({ _id: id })

    res.json({
        mensaje: "eliminado"
    });

}


//exportacion de las funciones

module.exports = {
    listar,
    guardar,
    mostrar,
    modificar,
    eliminar
}