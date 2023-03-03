const daoEliminar = require("../dao/eliminar");

exports.ejecutar = async (req, res) => {

    try{
        console.log("Controlador consultar por id");
        console.log("req: " + req);

        var  resultadoGuardar = await daoEliminar.ejecutar(req.params.id);
        res.status(200).send({ estado: "ok", mensaje: "Los datos se han eliminado correctamente", data: resultadoGuardar});
    }
    catch(error){
        console.error("Ocurrió un error al eliminar los datos: " + error);
        res.status(500).send({ estado: "error", mensaje: "Ocurrió un error al eliminar los datos", error: error});
    }
};