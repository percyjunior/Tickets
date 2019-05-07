
exports.eventoDetalle = function(req, res, next){
    res.render('Evento/eventoDetalle');
  }

exports.eventoDetallePost = function(req, res, next) {
    item = {
        kid: req.body.cantikid,
        adult: req.body.cantiAdu
    }
    console.log("Estos son los datos que se agarran del POST");
    console.log(item);
    res.redirect('/evento/asientos');
}

exports.asientoDetalle = function(req, res, next){
    res.render('Evento/seleccionAsientos');
}