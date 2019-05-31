const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema= Schema({
    nombre: String,
        precio: String,
        disponible:String,
        evento:String,
  status: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('nuevoAsientoCreado', TaskSchema);// para utilizar en otros modulos
