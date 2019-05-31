var qrImage = require('qr-image');
var fs = require('fs');
var nodemailer = require('nodemailer');
const paypal = require('paypal-rest-sdk');
const Task = require('../model/task');

exports.eventoDetalle = function (req, res, next) {
    res.render('Evento/eventoDetalle');
}
<<<<<<< HEAD
exports.eventoNuevo = function (req, res, next) {
    res.render('Evento/nuevoEvento');
}
var kid=0,adult=0;
=======


exports.eventoNuevo = function (req, res, next) {
    res.render('Evento/nuevoEvento');

  }





>>>>>>> f0bcd563bd74ca6b618d4c89316bb17dbbbf201e
exports.eventoDetallePost = function (req, res, next) {
  mandar(req.body.cantikid,req.body.cantiAdu);
    item = {
        kid: req.body.cantikid,
        adult: req.body.cantiAdu
    }
    
    console.log("Estos son los datos que se agarran del POST");
    console.log(item);
    res.redirect('/evento/asientos');
}
var a,b;
function mandar(cantikid,cantiAdu){
a=cantikid;
b=cantiAdu;
}
function recibir1(){
console.log(a);
}
function recibir2(){
  console.log(a);
  }
exports.asientoDetalle = function (req, res, next) {
    recibir1();
    recibir2();
    //$("#cantiAdu").html(recibir1());
    //var div=document.getElementById("cantiAdu");
    //div.innerHTML=recibir1();
    res.render('Evento/seleccionAsientos');
}

exports.asientoDetallePost = function (req, res, next) {
  //console.log(kid,adult);
  
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
function rand_code(chars, lon){
	code = "";
	for (x=0; x < lon; x++){
		rand = Math.floor(Math.random()*chars.length);
		code += chars.substr(rand, 1);
	}
	return code;
}
function email(respuesta, ci1, nombre1,apellido1, sexo1,telefono1,nacimiento1, ci2, nombre2,apellido2,sexo2,telefono2, nacimiento2, email,a) {
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'wendycalizayaperez@gmail.com',
      pass: 'wendy79752940'
    }
  });
  var mydate = new Date();
  var year = mydate.getYear();
  if (year < 1000)
    year += 1900;
  var day = mydate.getDay();
  var month = mydate.getMonth() + 1;
  if (month < 10)
    month = "0" + month;
  var daym = mydate.getDate();
  if (daym < 10)
    daym = "0" + daym;
  var mailOptions = {
    from: 'Tickets <wendycalizayaperez@gmail.com>', to: email,
    subject: 'Hola ' + nombre1+' '+apellido1,
    text: 'Hola Mundo',
    html:// fotos1+'<br><b style="color:#4D98F1;">Cliente: </b>'
    '<img src="http://d-ticket.com.mx/wp-content/uploads/2018/02/logo-d-ticket.png" width="800">'+
    '<img src="https://www.emi.edu.bo/images/Logos_EMI/logo-emi.png" width="300">'+
      '<br><b style="color:#4D98F1;">Direccion: </b>Escuela militar de ingeniera' +
      '<br><b style="color:#4D98F1;">NIT: </b>16036160' +
      '<br><b style="color:#4D98F1;">Fecha de compra: </b>'+
      '<small><font><b>'+daym+'/'+month+'/'+year+'</b></font></small>'+
      '<br><b style="color:#4D98F1;">Codigo de reserva: </b>' + a +
      '<div style="text-align:center;"><TABLE style="text-align:center;" border="1" cellpadding="0" cellspacing="0" width="50%"><TR><TD  width="50%" bgcolor="blue" style="color:#EFF3F9">CI</TD><TD width="50%" bgcolor="blue" style="color:#EFF3F9">Nombre</TD><TD width="50%" bgcolor="blue" style="color:#EFF3F9">Apellido</TD><TD width="50%" bgcolor="blue" style="color:#EFF3F9">Sexo</TD><TD width="50%" bgcolor="blue" style="color:#EFF3F9">Telefono</TD><TD width="50%" bgcolor="blue" style="color:#EFF3F9">Fecha de nacimiento</TD></TR><TR><TD width="50%" style="color:#010A0C">'+ci1+
      '</TD><TD width="50%" style="color:#010A0C">'+nombre1+
      '</TD><TD width="150%" style="color:#010A0C">'+apellido1+
      '</TD><TD width="150%" style="color:#010A0C">'+sexo1+
      '</TD><TD width="150%" style="color:#010A0C">'+telefono1+
      '</TD><TD width="150%" style="color:#010A0C">'+nacimiento1+
      '</TD></TR><TR><TD width="50%" style="color:#010A0C">'+ci2+
      '</TD><TD width="150%" style="color:#010A0C">'+nombre2+
      '</TD><TD width="150%" style="color:#010A0C">'+apellido2+
      '</TD><TD width="150%" style="color:#010A0C">'+sexo2+
      '</TD><TD width="150%" style="color:#010A0C">'+telefono2+
      '</TD><TD width="150%" style="color:#010A0C">'+nacimiento2+
      '</TR></TABLE></div>' +
      ' <br><b style="color:#4D98F1;">la foto es: </b><!doctype html><html><head></head><body> '//+fotos
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return console.log(error);
    }

    console.log('Mensaje enviado: ' + info.response);
  });

}

exports.formularioClientePost = function (req, res, next) {
    var cod = ["cod1", "cod2"];
    /* for (var j = 0; j < (cod[0]+cod[1]); j++) {
         var listItem = req.body.createElement('li');
         listItem.textContent = superPowers[j];
         myList.appendChild(listItem);
     }*/
     a=rand_code("0123456789ABCDEFG", 6);
    item = {
        data: [
            {
                ci: req.body.ci1,
                nombre: req.body.nombre1,
                apellido:req.body.apellido1,
                sexo:req.body.sexo1,
                telefono:req.body.telefono1,
                nacimiento: req.body.nacimiento1,
                email: req.body.email
            },
            {
                ci: req.body.ci2,
                nombre: req.body.nombre2,
                apellido:req.body.apellido2,
                sexo:req.body.sexo2,
                telefono:req.body.telefono2,
                nacimiento: req.body.nacimiento2,
                email: req.body.email,
            }
        ],
        codigo:a
    }
    for(i in item.data){
      task = new Task(item.data[i]);
      task.save();
    }
    /*task = new Task(item);
   task.save();*/
    for (i in item.data) {
        let datastring = JSON.stringify(item.data[i]);
        qrImage
            .image(datastring, { type: 'jpg', size: 20 })
            .pipe(fs.createWriteStream(item.data[i].ci + ".jpg"));
        console.log(item.data[i]);
    }
    email(res, req.body.ci1, req.body.nombre1,req.body.apellido1,req.body.sexo1,req.body.telefono1, req.body.nacimiento1
      , req.body.ci2, req.body.nombre2, req.body.apellido2,req.body.sexo2,req.body.telefono2,req.body.nacimiento2, req.body.email,a);  
      
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