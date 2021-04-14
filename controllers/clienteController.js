//importando el  modelo
const clienteModel = require("./../models/ClienteModel");

async function listar (req, res){
    const cliente= await clienteModel.find();
    res.json(cliente);
}

async function guardar (req, res){
    var cliente = new clienteModel(req.body);
    await cliente.save();

    res.json({mensaje:"cliente alamcenado"});
}

async function mostrar (req, res){
    let id = req.params.id;    
    
    try {
        const cliente = await clienteModel.findById(id)

        if (cliente) {
            
            res.json({
                mensaje: "cliente HALLADO",
                cliente: cliente
            })
            
        } else {
            res.json({
                mensaje: "cliente NO ENCONTRADO"
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

async function modificar (req, res){
    let id = req.params.id;

    try{
        const cliente = await clienteModel.findById(id);
        if(cliente){
            //modifica setea objeto
            cliente.nombre = req.nombre;
            cliente.apellido = req.apellido;
            cliente.empresa = req.empresa;
            cliente.email = req.email;
            cliente.telefono = req.telefono;

            //modifica
             const clieModify= await clienteModel.findOneAndUpdate({_id:id},req.body);
             res.json({mensaje: "Cliente modificado", cliente: clieModify});

        }else{
            res.json({mensaje: "Cliente no encontrado"})
        }    
    }catch(error){
        res.json({
            status:404,
            mensaje: "acceso indebido errr en busqueda"
        })
    }
}

async function eliminar (req, res){
    let id = req.params.id;
    await clienteModel.remove({ _id: id })
    res.json({
        mensaje: "eliminado"
    });
}


//exportar modelo
module.exports = {
    listar,
    guardar,
    mostrar,
    modificar,
    eliminar
}