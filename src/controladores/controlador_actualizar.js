const daoActualizar = require("../dao/actualizar");

exports.ejecutar = async (req, res) => {

    try{
        console.log("Controlador actualizar");
        console.log("req: " + req);

        var  resultadoGuardar = await daoActualizar.ejecutar(req.params.id, req.body);
        res.status(200).send({ estado: "ok", mensaje: "Los datos se han actualizado correctamente", data: resultadoGuardar});
    }
    catch(error){
        console.error("Ocurrió un error al actualizar los datos: " + error);
        res.status(500).send({ estado: "error", mensaje: "Ocurrió un error al actualizar los datos", error: error});
    }
};