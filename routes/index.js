//improtando uth controlle
const authController = require("./../controllers/authController");


//importando el modelo de usuaruo


const usuarioController = require("./../controllers/usuarioController");

module.exports.add = (app) => {
    //rutas definicion
    app.get("/", (req, res)=>{
        res.send("Acceso NO autorizado");
        
    });
   
    app.get("/test", (req, res)=>{
        res.send("Acceso de prueba");
        
    });
    
    app.get("/usuario",usuarioController.listar);
    app.post("/usuario",usuarioController.guardar);
    app.get("/usuario/:id",usuarioController.mostrar);
    app.put("/usuario/:id",usuarioController.modificar);
    app.delete("/usuario/:id",usuarioController.eliminar);

    //llogin
    app.post("/ingresar", authController.ingresar)
}
