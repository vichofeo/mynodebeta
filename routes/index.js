

//importando el modelo de usuaruo
const usuarioController = require("./../controllers/usuarioController");
//improtando uth controlle
const authController = require("./../controllers/authController"); 
//importa controller cliente
const clienteController = require("./../controllers/clienteController");
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
    
    // rutas de prueba  para usuario
    app.get("/usuario", authMiddleWare.verificaLogin ,usuarioController.listar);
    app.post("/usuario",authMiddleWare.verificaLogin, usuarioController.guardar);
    app.get("/usuario/:id",authMiddleWare.verificaLogin, usuarioController.mostrar);
    app.put("/usuario/:id",authMiddleWare.verificaLogin, usuarioController.modificar);
    app.delete("/usuario/:id",authMiddleWare.verificaLogin, usuarioController.eliminar);

    //llogin o iniciao sesion
    app.post("/ingresar", authController.ingresar);

    //rutas de clientes
    app.get("/cliente",authMiddleWare.verificaLogin, clienteController.listar);
    app.post("/cliente",authMiddleWare.verificaLogin, clienteController.guardar);
    app.get("/cliente/:id",authMiddleWare.verificaLogin, clienteController.mostrar);
    app.put("/cliente/:id",authMiddleWare.verificaLogin, clienteController.modificar);
    app.delete("/cliente/:id",authMiddleWare.verificaLogin, clienteController.eliminar);

}
