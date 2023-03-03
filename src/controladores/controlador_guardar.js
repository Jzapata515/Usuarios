const daoGuardar = require("../dao/guardar");

exports.ejecutar = async (req, res) => {

    try{
        console.log("Controlador guardar");
        console.log("req: " + req);

        var  resultadoGuardar = await daoGuardar.ejecutar(req.body);
        res.status(200).send({ estado: "ok", mensaje: "Los datos se han guardardo correctamente", data: resultadoGuardar});
    }
    catch(error){
        console.error("Ocurrió un error al guardar los datos: " + error);
        res.status(500).send({ estado: "error", mensaje: "Ocurrió un error al guardar los datos", error: error});
    }
};