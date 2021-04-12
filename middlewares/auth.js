//trabaja en funcion al token.
var jwt = require("jsonwebtoken");
var config = require("./../config/config");

//verificando el middel ware copnoccido como 'guard'
const verificaLogin = (req, res, next)=>{
    //catura token de los header
    var token = req.headers['token'];
    console.log(token);
    if (!token) {
        //codigo 403 autenticacion incorrecta
        return res.status(403).send({
            auth: false,
            mensaje: "no proprociono el token de acceso seguro"
        });
    }
    //verificar si es el token correcto
    jwt.verify(token, config.JWT_KEY_TOKEN, (error, decoded) => {
        console.log(decoded);

        if (error)
            return res.status(500).send({
                auth: false,
                mensaje: "Error token incorrecto error de autenticacion"
            });

        //si es correcto manda al siguiente
        req.user = {
            usuario: decoded.username,
            id: decoded.id
        }
        next();
    });
}

//exporta
module.exports = {
    verificaLogin
}