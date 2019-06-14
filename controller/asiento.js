//const nuevoAsientoCreadoo = require('../model/nuevoAsientoCreado');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
exports.nuevo = function(req, res, next){
    res.render('Asiento/crearAsiento');
}
const TaskSchema= mongoose.Schema({
    nombre: String,
        precio: String,
        disponible:String,
        evento:String,
});
var nuevoAsientoCreado = mongoose.model('nuevoAsientoCreado', TaskSchema);// para utilizar en otros modulos
exports.crearPost = function(req, res, next){
    console.log("Entro al crear");
    item={
        nombre: req.body.nombreAsiento,
        precio: req.body.costo,
        disponible: req.body.disponible,
        evento: req.body.nombreEvento
    }
    nuevoAsientoCreado = new nuevoAsientoCreado(item);
    nuevoAsientoCreado.save();
    console.log("Los datos del asiento son:");
    console.log(item);
    res.json(nuevoAsientoCreado);
    res.send("Asiento Creado");
}
exports.editar = function(req, res, next){
    res.render('Asiento/editarAsiento');
}
exports.editarPost = function(req, res, next){
    res.send("ASiento editado correctamente");
}
exports.mostrar = function(req, res, next){
    console.log("Entro al mostrar");
   nuevoAsientoCreado.find({}, function(error, asientos){
        if(error){
            res.send('Error.');
        }else{
          res.send(asientos);
        //console.log(evento);
          //res.json(nuevoEventoCreado);
        }
    });
}
exports.destroy = function(req, res){
   console.log("Entro al borrar");
	nuevoAsientoCreado.remove({_id: req.params._id}, function(error){
        //console.log(_id);
		if(error){
			res.send('Error al intentar eliminar');
		}else{	
			res.send('Se lo removio correctamente');
		}
	});
};
