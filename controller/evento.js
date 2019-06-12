const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const nuevoEventoCreadoo = require('../model/nuevoEventoCreado');
exports.nuevo = function (req, res, next) {
    var listEventos= [{nombre:'eento01',edad:12},{nombre:'eento01',edad:12},{nombre:'eento01',edad:12},{nombre:'eento01',edad:12},{nombre:'eento01',edad:12}]
    res.json(listEventos);
}
const TaskSchema= mongoose.Schema({
    nombre: String,
    lugar: String,
    descripcion: String,
    coordinador: String
});
var nuevoEventoCreado = mongoose.model('nuevoEventoCreado', TaskSchema);// para utilizar en otros modulos

exports.nuevoPost = function (req, res, next){
    item = {
        nombre: req.body.nombreEvento,
        lugar: req.body.LugarEvento,
        descripcion: req.body.Descripcion,
        coordinador: req.body.nombreCoordinador    
    }
    nuevoEventoCreado = new nuevoEventoCreado(item);
    nuevoEventoCreado.save();
    console.log("Datos del evento:");
    console.log(item);
    res.json(nuevoEventoCreado);
    res.send("Creado de Evento");
}

exports.destroy = function(req, res){
    console.log("Entro al borrar");
	nuevoEventoCreado.remove({_id: req.params._id}, function(error){
        //console.log(_id);
		if(error){
			res.send('Error al intentar eliminar');
		}else{	
			res.send('Se lo removio correctamente');
		}
	});
};

exports.editar = function ( req, res, next){
    res.render('Evento/editarEvento');
}
exports.editarPost = function(req, res, next){
    item = {
        nombre: req.body.nombreEvento,
        lugar: req.body.LugarEvento,
        descripcion: req.body.Descripcion,
        coordinador: req.body.nombreCoordinador    
    }
    console.log("Datos del evento Editados:");
    console.log(item);
    res.send("Evento editado");
}
exports.mostrar = function(req, res, next){
    console.log("Entro al mostrar");
    nuevoEventoCreado.find({}, function(error, evento){
        if(error){
            res.send('Error.');
        }else{
          res.send(evento);
        //  console.log(evento);
          //res.json(nuevoEventoCreado);
        }
    });
}