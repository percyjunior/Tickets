var qrImage = require('qr-image');
var fs = require('fs');
var nodemailer = require('nodemailer');
const paypal = require('paypal-rest-sdk');

exports.eventoDetalle = function (req, res, next) {
    res.render('Evento/eventoDetalle');
}
exports.eventoNuevo = function (req, res, next) {
    res.render('Evento/nuevoEvento');
}

exports.eventoDetallePost = function (req, res, next) {
    item = {
        kid: req.body.cantikid,
        adult: req.body.cantiAdu
    }
    console.log("Estos son los datos que se agarran del POST");
    console.log(item);
    res.redirect('/evento/asientos');
}

exports.asientoDetalle = function (req, res, next) {
    res.render('Evento/seleccionAsientos');
}

exports.asientoDetallePost = function (req, res, next) {
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

exports.formularioCliente = function (req, res, next) {
    //email(res, req.body.ci1, req.body.nombre1,req.body.nacimiento1
       // , req.body.ci2,req.body.nombre2, req.body.nacimiento2,req.body.email);

    res.render('Evento/formularioPersonas');
}

exports.formularioClientePost = function (req, res, next) {
    var cod = ["cod1", "cod2"];
    /* for (var j = 0; j < (cod[0]+cod[1]); j++) {
         var listItem = req.body.createElement('li');
         listItem.textContent = superPowers[j];
         myList.appendChild(listItem);
     }*/
    item = {
        data: [
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
    for (i in item.data) {
        let datastring = JSON.stringify(item.data[i]);
        qrImage
            .image(datastring, { type: 'jpg', size: 20 })
            .pipe(fs.createWriteStream(cod[i] + ".jpg"));
        console.log(item.data[i]);
    }
    const create_payment_json = {
        "intent": "sale",
        "payer": {
          "payment_method": "paypal"
        },
        "redirect_urls": {
          "return_url": "http://localhost:3000/success",
          "cancel_url": "http://localhost:3000/cancel"
        },
        "transactions": [{
          "item_list": {
            "items": [{
              "name": "Red Sox Hat",
              "sku": "001",
              "price": "25.00",
              "currency": "USD",
              "quantity": 1
            }]
          },
          "amount": {
            "currency": "USD",
            "total": "25.00"
          },
          "description": "Hat for the best team ever"
        }]
      };
    
      paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
          throw error;
        } else {
          for(let i = 0;i < payment.links.length;i++){
            if(payment.links[i].rel === 'approval_url'){
              res.redirect(payment.links[i].href);
            }
          }
        }
      });
    
}