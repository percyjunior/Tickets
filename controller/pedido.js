var qrImage = require('qr-image');
var fs = require('fs');

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
    var cod = ["cod1", "cod2"];
    item = {
        data:[
            {
                ci1: req.body.ci1,
                nombre1: req.body.nombre1,
                nacimiento1: req.body.nacimiento1
            },
            {
                ci2: req.body.ci2,
                nombre2: req.body.nombre2,
                nacimiento2: req.body.nacimiento2
            }
        ],
        email: req.body.email
    }
    for (i in item.data){
        let datastring = JSON.stringify(item.data[i]);
        qrImage
            .image(datastring,{type:'jpg', size:20})
            .pipe(fs.createWriteStream(cod[i]+".jpg"));
        console.log(item.data[i]);
    }
    res.redirect('/');
}