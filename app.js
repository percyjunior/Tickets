var createError = require('http-errors');
const express = require('express');
const paypal = require('paypal-rest-sdk')
const path = require('path');
var cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
var indexRouter = require('./routes/index');

const app = express();

// app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

/*conection with MongoDB*/
/*mongoose.connect('mongodb://localhost/holaaaa')
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));*/
mongoose.connect ('mongodb://localhost/holaaaa', {useNewUrlParser: true})
.then(db => console.log('db connected'))
  .catch(err => console.log(err));



//Cofigurations of Paypal
paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'AfxPnvrWouA6itWxf0Frr6ja2n-84FyCelw9NCMYF9lZx6hCjQX3NytyPajNwiMupdOo2_Mr7pJrHpHu',
  'client_secret': 'EI3G0qPS1_eiyZ32mSl9tA9WYUPDcrMxu7DFcIdiMwMFOrJrsIG82MiXiwIaiu-ky_IBJRuOEuUxIb7L'
});

// view engine setup
//app.set('port', process.env.PORT || 3000);// el que se encarga de los puertos es nodemon, con eso no importa si cambiamos el numero del puerto
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use(express.static(path.join(__dirname, 'Static')))
//app.use('/Login', usersRouter);

// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
  next(createError(404));
});*/

// error handler
/*app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
*/
/*app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});*/
module.exports = app;
