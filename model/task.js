const mongoose = require('mongoose');
const Schema = mongoose.Schema;
chars = "0123456789ABCDEFG";
lon = 6;
const TaskSchema= Schema({
    nombre: String,
    telefono:String,
    password: require('../controller/codigo3'),
    /*{
      type: String,
      validate: function(chars,lon) {
          code = "";
          for (x=0; x < lon; x++){
            rand = Math.floor(Math.random()*chars.length);
            code += chars.substr(rand, 1);
          }
          console.log(code);
          return code; 
        }
    },*/
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
