var express = require('express');
var router = express.Router();

//improtando el controller
var usersController = require("../controller/usersController");

//url:id sera cifrado
router.get("/", usersController.listar);
router.post("/", usersController.guardar);
router.get("/:id", usersController.mostrar);
router.put("/:id", usersController.modificar);
router.delete("/:id", usersController.eliminar);


//exportacion de la router
module.exports = router;