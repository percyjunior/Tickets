const express = require('express');
const router = express.Router();
let common = require('../controller/common')
const paypal = require('paypal-rest-sdk')
const Task = require('../model/task');
const contrasena = require('../controller/codigo3');
var nodemailer = require('nodemailer');

/*router.get('/', async (req, res) => {//para que responda
  const tasks = await Task.find();
  res.render('index', {//estoy renderizando una vista
    tasks
  });
});*/
/* GET home page. */
// router.get('/', common.home);
router.post('/add', async (req, res, next) => {
  a=rand_code("0123456789ABCDEFG", 6);
  email(res, req.body.ci1, req.body.nombre1,req.body.apellido1,req.body.sexo1,req.body.telefono1, req.body.nacimiento1
    , req.body.ci2, req.body.nombre2, req.body.apellido2,req.body.sexo2,req.body.telefono2,req.body.nacimiento2, req.body.email,a);
  const task = new Task(req.body);
  await task.save();
  res.redirect('/');
 

});
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
/*router.get('/conseguir', async (req, res, next) => {
  const contrasena = new contrasena(req.body);
  await contrasena.save();
  res.redirect('/');
});*/
router.get('/turn/:id', async (req, res, next) => {
  let { id } = req.params;
  const task = await Task.findById(id);
  task.status = !task.status;
  await task.save();
  res.redirect('/');
});


router.get('/edit/:id', async (req, res, next) => {
  const task = await Task.findById(req.params.id);
  console.log(task)
  res.render('edit', { task });
});

router.post('/edit/:id', async (req, res, next) => {
  const { id } = req.params;
  await Task.update({ _id: id }, req.body);
  res.redirect('/');
});

router.get('/delete/:id', async (req, res, next) => {
  let { id } = req.params;
  await Task.remove({ _id: id });
  res.redirect('/');
});
/* GET Evento page. */
let pedido = require('../controller/pedido');
let evento = require('../controller/evento');
let asiento = require('../controller/asiento');

router.get('/admin/nuevoEvento', evento.nuevo);

router.post('/admin/nuevoEvento', evento.nuevoPost);
router.post('/admin/nuevoAsiento', asiento.crearPost);

router.get('/admin/mostrarEventos', evento.mostrar);
router.get('/admin/mostrarAsientos', asiento.mostrar);
router.delete('/admin/EliminarAsiento', asiento.destroy);

router.delete('/admin/EliminarEventos', evento.destroy);

router.get('/admin/editarEvento', evento.editar);

router.post('/admin/editarEvento', evento.editarPost);

router.get('/admin/crearAsiento', asiento.nuevo);

router.post('/admin/crearAsiento', asiento.crearPost);

router.get('/admin/editarAsiento', asiento.editar);

router.post('/admin/editarASiento', asiento.editarPost);

router.get('/admin/mostrarAsientos', asiento.mostrar);

router.get('/evento', pedido.eventoDetalle);

router.post('/evento', pedido.eventoDetallePost);


router.get('/evento/asientos', pedido.asientoDetalle);

router.post('/evento/asientos', pedido.asientoDetallePost);

router.get('/evento/formulario', pedido.formularioCliente);

router.post('/evento/formulario', pedido.formularioClientePost);

/* GET users listing. */
let users = require('../controller/users')
router.get('/admin/CrearUsuario', users.CrearUsuarioGet);

router.post('/admin/CrearUsuario', users.CrearUsuarioPost);

router.get('/admin/MostratUsuarios', users.MostrarUsuarios);

router.get('/Login', users.logginGet);

router.post('/Login', users.logginPost);

router.get('/admin', users.home);

router.get('/admin/evento',users.eventos);

router.get('/admin/asiento',users.asientos);

router.get('/admin/usuario',users.usuarios);

router.get('/success', (req, res) => {
  const payerId = req.query.PayerID;
  const paymentId = req.query.paymentId;

  const execute_payment_json = {
    "payer_id": payerId,
    "transactions": [{
      "amount": {
        "currency": "USD",
        "total": "25.00"
      }
    }]
  };

  paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
    if (error) {
      console.log(error.response);
      throw error;
    } else {
      console.log(JSON.stringify(payment));
      res.send('Success');
    }
  });
});

router.get('/cancel', (req, res) => res.send('Cancelled'));
router.get('/cancel', (req, res) => res.send('Transaccion cancelada'));

module.exports = router;
