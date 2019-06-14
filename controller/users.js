
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var querystring = require('querystring');

exports.CrearUsuarioGet = function (req, res, next) {
  res.render('User/crearUsuario');
  //res.send('respond with a resource');

}

exports.logginPost = function (pedido, respuesta, next) {
  res.send("Ingresndo al metodo general");
}
//const nuevoUsuarioCreadoo = require('../model/nuevoUsuarioCreado');

exports.home = function(req, res, next){
  res.render('Admin/adminHome');
}

exports.CrearUsuarioPost = function (req, res, next) {
  /*item = {
    nombre: req.body.nombreUsuario,
    password: req.body.password,
    paypal: req.body.paypal,
    secret: req.body.secret
  }
  nuevoUsuarioCreado = new nuevoUsuarioCreadoo(item);
  nuevoUsuarioCreado.save();
  console.log(item);
  res.json(nuevoUsuarioCreado);

  res.send('respond with a resourcasdasdasdasde');*/

}



const TaskSchema= Schema({
    nombre: String,
    apellido: String,
    ci: String,
    correo: String,
    contrasena: String,
    contrasena2 : String,
      
});
var nuevoUsuarioCreado = mongoose.model('nuevoUsuarioCreado', TaskSchema);// para utilizar en otros modulos

exports.CrearPost = function (req, res, next) {
  console.log("Creo usuario");

  item = {
    nombre: req.body.nombreusuario,
    apellido: req.body.apellido,
    ci: req.body.ci,
    correo: req.body.correo,
    contrasena: req.body.contrasena,
    contrasena2: req.body.contrasena2
    
  }
  nuevoUsuarioCreado = new nuevoUsuarioCreado(item);
  nuevoUsuarioCreado.save();
  console.log(item);
  res.json(nuevoUsuarioCreado);
  res.send('respond with a resourcasdasdasdasde');

}

exports.MostrarUsuarios = function (req, res, next) {
  console.log("Entro al mostrar usuarios");
  nuevoUsuarioCreado.find({}, function(error, usuarios){
       if(error){
           res.send('Error');
       }else{
         res.send(usuarios);
       //console.log(evento);
         //res.json(nuevoEventoCreado);
       }
   });
}

exports.logginGet = function (req, res, next) {
  res.render('User/login')
}

exports.logginPost = function (req, res, next) {
  if (req.body.email == 'wendycalizayaperez@gmail.com' && req.body.pass == 'admin' || req.body.email == 'percy21@hotmail.es' && req.body.pass == 'percygamboa') {
    console.log('Contraseña correcta');
    res.redirect('/admin');
  }
  else {
    console.log('Contraseña incorrecta');
    res.redirect('Login');
  }
}

exports.eventos = function (req, res, next){
  res.render('Admin/eventoCRUD');
}

exports.asientos = function (req, res, next){
  res.render('Admin/asientoCRUD');
}

exports.usuarios = function (req, res, next){
  res.render('Admin/usuarioCRUD');
}

exports.EliminarUsuarioGet = function (req, res, next) {
  res.send('respond with a resource');
}

exports.EliminarUsuarioPost = function (req, res, next) {
  res.send('respond with a resource');
}