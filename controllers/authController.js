const config = require("./../config/config");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UsuarioModel = require("../models/UsuarioModel")

async function ingresar(req, res) {
    const usr = await UsuarioModel.findOne({ email: req.body.email });
    if(!usr){
        res.json({mensaje: "usuairo incoreccctoooo"});
    }else{
        
        var compare =  await bcrypt.compare(req.body.password, usr.password)
        console.log(compare);

        if(compare){
            //***bienvenido proceso del token
            //payload
            const payload={
                username:usr.usuario,
                id: usr._id,
                time: new Date()
            }
            //sincronzavion del payload con el token
            var token = jwt.sign(payload, config.JWT_KEY_TOKEN, {
                expiresIn: config.JWT_TIMER_SESS
            });

            res.json({
                acces_token:token,
                usr: usr,
                usuario: payload.username,
                email: usr.email,
                fecha: payload.time,
                hora_actual: new Date(),
                mensaje: "bien venido ENTRASTE"});
        }else{
            res.json({mensaje: "INCORRRCETO"});
        }
        
    }

}

//controlle para inicio de sesion

module.exports = {
    ingresar
}