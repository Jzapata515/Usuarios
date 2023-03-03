const daoConsultar = require("../dao/consultar");

exports.ejecutar = async (req, res) => {

    try{
        console.log("Controlador consultar");
        console.log("req: " + req);

        var  resultadoGuardar = await daoConsultar.consultar(req.query);
        res.status(200).send({ estado: "ok", mensaje: "Los datos se han recuperado correctamente", data: resultadoGuardar});
    }
    catch(error){
        console.error("Ocurrió un error al actualizar los datos: " + error);
        res.status(500).send({ estado: "error", mensaje: "Ocurrió un error al recuperar los datos", error: error});
    }
};