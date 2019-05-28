const mongoose = require('mongoose');
const Schema = mongoose.Schema;
chars = "0123456789ABCDEFG";
lon = 6;
const TaskSchema= Schema({
    ci1: String,
    nombre1:String,
    apellido1:String,
    sexo1:String,
    telefono1:String,
    nacimiento1: String,
    a:String,
    ci2:String,
    nombre2:String,
    apellido2:String,
    sexo2:String,
    telefono2:String,
    nacimiento2: String,
    email:String,
  status: {
    type: Boolean,
    default: false
  }
});

/*function rand_code(chars, lon){
	code = "";
	for (x=0; x < lon; x++){
		rand = Math.floor(Math.random()*chars.length);
		code += chars.substr(rand, 1);
	}
	return code;
}*/
 //a=rand_code(caracteres, longitud);

module.exports = mongoose.model('tasks', TaskSchema);// para utilizar en otros modulos
