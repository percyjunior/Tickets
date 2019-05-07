
exports.CrearUsuarioGet = function(req, res, next) {
  res.render('User/crearUser');
}

exports.CrearUsuarioPost = function(req, res, next) {
  res.render('User/crearUser');
}

exports.MostrarUsuarios = function(req, res, next) {
  res.send('respond with a resource');
}

exports.logginGet = function(req, res, next) {
  res.render('User/login')
}

exports.logginPost = function(req, res, next) {
  res.send('respond with a resource');
}

exports.EliminarUsuarioGet = function(req, res, next) {
  res.send('respond with a resource');
}

exports.EliminarUsuarioPost = function(req, res, next) {
  res.send('respond with a resource');
}