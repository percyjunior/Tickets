const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = Schema({
    nombre: String,
    telefono:String,
    password: String,
    email:String,
  status: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('tasks', TaskSchema);// para utilizar en otros modulos
