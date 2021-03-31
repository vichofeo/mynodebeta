var express = require('express');
var router = express.Router();

//importar el controller
var productoController = require("../controller/productoController");

//url:id sera cifrado
router.get("/", productoController.listar);
router.post("/", productoController.guardar);
router.get("/:id", productoController.mostrar);
router.put("/:id", productoController.modificar);
router.delete("/:id", productoController.eliminar);


//exportacion de la router
module.exports = router;