const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema= Schema({

    nombre: String,
    password: String,
    paypal: String,
    secret: String,
  status: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('nuevoUsuarioCreado', TaskSchema);// para utilizar en otros modulos
