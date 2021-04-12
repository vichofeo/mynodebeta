

//importando el modelo de usuaruo
const usuarioController = require("./../controllers/usuarioController");
//improtando uth controlle
const authController = require("./../controllers/authController");
//improta el mideleware
const authMiddleWare = require("../middlewares/auth");


module.exports.add = (app) => {
    //rutas definicion
    app.get("/", (req, res)=>{
        res.send("Acceso NO autorizado");
        
    });
   
    app.get("/test", (req, res)=>{
        res.send("Acceso de prueba");
        
    });
    
    app.get("/usuario", authMiddleWare.verificaLogin ,usuarioController.listar);
    app.post("/usuario",authMiddleWare.verificaLogin, usuarioController.guardar);
    app.get("/usuario/:id",authMiddleWare.verificaLogin, usuarioController.mostrar);
    app.put("/usuario/:id",authMiddleWare.verificaLogin, usuarioController.modificar);
    app.delete("/usuario/:id",authMiddleWare.verificaLogin, usuarioController.eliminar);

    //llogin
    app.post("/ingresar", authController.ingresar)
}
