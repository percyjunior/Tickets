const express = require('express');
const router = express.Router();
let common = require('../controller/common')
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
router.get('/', common.home);
router.post('/add', async (req, res, next) => {
  a=rand_code("0123456789ABCDEFG", 6);
  email(res, req.body.ci1, req.body.nombre1, req.body.nacimiento1
    , req.body.ci2, req.body.nombre2, req.body.nacimiento2, req.body.email,a);
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
function email(respuesta, ci1, nombre1, nacimiento1, ci2, nombre2, nacimiento2, email,a) {
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
    subject: 'Hola ' + nombre1,
    text: 'Hola Mundo',
    html:// fotos1+'<br><b style="color:#4D98F1;">Cliente: </b>'
    nombre1 +
      '<br><b style="color:#4D98F1;">Codigo de reserva: </b>' + a +
      '<br><b style="color:#4D98F1;">CI: </b>'+ci1 +
      '<br><b style="color:#4D98F1;">Nacimiento: </b>'+nacimiento1 +
      '<br><b style="color:#4D98F1;">Nombre segunda persona: </b>'+nombre2 +
      '<br><b style="color:#4D98F1;">CI: </b>'+ci2 +
      '<br><b style="color:#4D98F1;">Nacimiento: </b>'+nacimiento2 +
      '<br><b style="color:#4D98F1;">Fecha: </b>' +
      '<small><font><b>' + daym + '/' + month + '/' + year + '</b></font></small>' +
      '<br><b style="color:#4D98F1;">Direccion: </b>Escuela militar de ingeniera' +
      '<br><b style="color:#4D98F1;">NIT: </b>16036160' +
      '<div style="text-align:center;"><TABLE style="text-align:center;" border="1" cellpadding="0" cellspacing="0" width="50%"><TR><TD  width="50%" bgcolor="blue" style="color:#EFF3F9">Nombre del evento</TD><TD width="50%" bgcolor="blue" style="color:#EFF3F9">Cantidad de personas</TD><TD width="50%" bgcolor="blue" style="color:#EFF3F9">Monto unitario</TD><TD width="50%" bgcolor="blue" style="color:#EFF3F9">Monto total</TD></TR><TR><TD width="50%" style="color:#010A0C">2,1</TD><TD width="50%" style="color:#010A0C">2,2</TD><TD width="150%" style="color:#010A0C">2,3</TD><TD width="150%" style="color:#010A0C">4512</TD></TR></TABLE></div>' +
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
let pedido = require('../controller/pedido')
router.get('/evento', pedido.eventoDetalle);
router.get('/nuevoEvento', pedido.eventoNuevo);

router.post('/evento', pedido.eventoDetallePost);

router.get('/evento/asientos', pedido.asientoDetalle);

router.post('/evento/asientos', pedido.asientoDetallePost);

router.get('/evento/formulario', pedido.formularioCliente);

router.post('/evento/formulario', pedido.formularioClientePost);

/* GET users listing. */
let users = require('../controller/users')
router.get('/CrearUsuario', users.CrearUsuarioGet);
router.post('/logeo', users.ingresarLogin);


router.post('/CrearUsuario', users.CrearUsuarioPost);

router.get('/MostratUsuarios', users.MostrarUsuarios);

router.get('/Login', users.logginGet);

router.post('/Login', users.logginPost);

module.exports = router;
