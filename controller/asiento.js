exports.nuevo = function(req, res, next){
    res.render('Asiento/crearAsiento');
}
exports.crearPost = function(req, res, next){
    item={
        nombre: req.body.nombreAsiento,
        precio: req.body.costo,
        disponible: req.body.disponible,
        evento: req.body.nombreEvento
    }
    console.log("Los datos del asiento son:");
    console.log(item);
    res.send("Asiento Creado");
}
exports.editar = function(req, res, next){
    res.render('Asiento/editarAsiento');
}
exports.editarPost = function(req, res, next){
    res.send("ASiento editado correctamente");
}
exports.mostrar = function(req, res, next){
    res.render('Asiento/mostrarAsientos');
}