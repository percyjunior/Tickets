
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

exports.asientoDetallePost = function(req, res, next){
    item = {
        cantiAdu: req.body.cantiAdu,
        cantikid: req.body.cantikid,
        precioAdu: req.body.precioAdu,
        precioKid: req.body.precioKid
    }
    console.log("Esto son lo precios y las cantidades para los boletos:");
    console.log(item);
    res.redirect('/evento/formulario');
}

exports.formularioCliente = function(req, res, next){
    res.render('Evento/formularioPersonas');
}

exports.formularioClientePost = function(req, res, next){
    item = {
        ci1: req.body.ci1,
        nombre1: req.body.nombre1,
        nacimiento1: req.body.cnacimiento,
        ci2: req.body.ci2,
        nombre2: req.body.nombre2,
        nacimiento2: req.body.nacimiento2,
        email: req.body.email
    }
    console.log(item);
    res.redirect('/');
}