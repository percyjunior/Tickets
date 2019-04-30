 

 exports.home = function(req, res, next) {
  res.render('index', { title: 'Express' });
}

exports.eventoDetalle = function(req, res, next){
  res.render('Evento/eventoDetalle');
}