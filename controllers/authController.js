const bcrypt = require("bcrypt");
const UsuarioModel = require("../models/UsuarioModel")

async function ingresar(req, res) {
    const usr = await UsuarioModel.findOne({ email: req.body.email });
    if(!usr){
        res.json({mensaje: "usuairo incoreccctoooo"});
    }else{
        
        var compare =  await bcrypt.compare(req.body.password, usr.password)
        console.log(compare);

        if(compare){
            res.json({mensaje: "bien venido entroi"});
        }else{
            res.json({mensaje: "INCORRRCETO"});
        }
        
    }

}

module.exports = {
    ingresar
}