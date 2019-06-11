
const nuevoEventoCreadoo = require('../model/nuevoEventoCreado');

exports.nuevo = function (req, res, next) {
    var listEventos= [{nombre:'eento01',edad:12},{nombre:'eento01',edad:12},{nombre:'eento01',edad:12},{nombre:'eento01',edad:12},{nombre:'eento01',edad:12}]
    res.json(listEventos);
}

exports.nuevoPost = function (req, res, next){
    item = {
        nombre: req.body.nombreEvento,
        lugar: req.body.LugarEvento,
        descripcion: req.body.Descripcion,
        coordinador: req.body.nombreCoordinador    
    }
    nuevoEventoCreado = new nuevoEventoCreadoo(item);
    nuevoEventoCreado.save();
    console.log("Datos del evento:");
    console.log(item);
    res.json(nuevoEventoCreado);
    res.send("Creado de Evento");
}
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
    res.render('Evento/mostrarEventos');
}