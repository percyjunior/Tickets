const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema= Schema({

    nombre: String,
    lugar: String,
    descripcion: String,
    coordinador: String, 
  status: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('nuevoEventoCreado', TaskSchema);// para utilizar en otros modulos
