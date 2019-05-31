exports.nuevo = function (req, res, next) {
    res.render('Evento/nuevoEvento');
}

exports.nuevoPost = function (req, res, next){
    item = {
        nombre: req.body.nombreEvento,
        lugar: req.body.LugarEvento,
        descripcion: req.body.Descripcion,
        coordinador: req.body.nombreCoordinador    
    }
    console.log("Datos del evento:");
    console.log(item);
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