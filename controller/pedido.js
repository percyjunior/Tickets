var qrImage = require('qr-image');
var fs = require('fs');

exports.eventoDetalle = function (req, res, next) {
    res.render('Evento/eventoDetalle');
}

exports.eventoDetallePost = function (req, res, next) {
    item = {
        kid: req.body.cantikid,
        adult: req.body.cantiAdu
    }
    console.log("Estos son los datos que se agarran del POST");
    console.log(item);
    res.redirect('/evento/asientos');
}

exports.asientoDetalle = function (req, res, next) {
    res.render('Evento/seleccionAsientos');
}

exports.asientoDetallePost = function (req, res, next) {
    item = {
        cantiAdu: req.body.cantiAdu,
        cantikid: req.body.cantikid,
        precioAdu: req.body.precioAdu,
        precioKid: req.body.precioKid
    }
    console.log("Esto son lo precios y las cantidades para los boletos:");
    console.log(item);
    res.redirect('/evento/formulario');
}
function email() {
    var http = require('http');
    var url = require('url');
    var fs = require('fs');
    var querystring = require('querystring');
    var name;
    var nodemailer = require('nodemailer');
    var contra;
    var nameClient;
    //var formidable=require('formidable');
    console.log('Servidor web iniciado');
    var mime = {
        'html': 'text/html',
        'css': 'text/css',
        'jpg': 'image/jpg',
        'ico': 'image/x-icon',
        'mp3': 'audio/mpeg3',
        'mp4': 'video/mp4'
    };

    var servidor = http.createServer(function (pedido, respuesta) {
        var objetourl = url.parse(pedido.url);
        var camino = 'views' + objetourl.pathname;
        if (camino == 'views/')
            camino = 'views/Evento/formularioPersonas.ejs';
        encaminar(pedido, respuesta, camino);
    });
    //servidor.listen(3000);
    function encaminar(pedido, respuesta, camino) {
        console.log(camino);
        switch (camino) {
            case 'Views/Evento/recuperardatos': {
                recuperar(pedido, respuesta);
                break;
            }
            default: {
                fs.exists(camino, function (existe) {
                    if (existe) {
                        fs.readFile(camino, function (error, contenido) {
                            if (error) {
                                respuesta.writeHead(500, { 'Content-Type': 'text/plain' });
                                respuesta.write('Error interno');
                                respuesta.end();
                            } else {
                                var vec = camino.split('.');
                                var extension = vec[vec.length - 1];
                                var mimearchivo = mime[extension];
                                respuesta.writeHead(200, { 'Content-Type': mimearchivo });
                                respuesta.write(contenido);
                                respuesta.end();
                            }
                        });
                    } else {
                        respuesta.writeHead(404, { 'Content-Type': 'text/html' });
                        respuesta.write('<!doctype html><html><head></head><body>Recurso inexistente</body></html>');
                        respuesta.end();
                    }
                });
            }
        }
    }
    function recuperar(pedido, respuesta) {
        var info = '';
        pedido.on('data', function (datosparciales) {
            info += datosparciales;
        });
        pedido.on('end', function () {
            var formulario = querystring.parse(info);
            respuesta.writeHead(200, { 'Content-Type': 'text/html' });
            var pagina = '<!doctype html><html><head></head><body>' +
                'Se envio al correo:' + formulario['email'] + '<br>' +
                'El nombre de usuario es:' + formulario['nombre2'] + '<br>' +
                'Clave:' + formulario['nacimiento2'] + '<br>' +
                // '<a href="index.html">Retornar</a>'+
                '</body></html>';
            contra = formulario['nacimiento2'];
            name = formulario['email'];
            nameClient = formulario['nombre2'];
            mandar(respuesta, name, contra, nameClient);
            //listar(respuesta);
            respuesta.end(pagina);
        });
    }

    
    function mandar(respuesta, name, contra, nameClient) {
        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'wendycalizayaperez@gmail.com',
                pass: 'wendy79752940'
            }
        });
        var mydate = new Date();
        var year = mydate.getYear();
        if (year < 1000)
            year += 1900;
        var day = mydate.getDay();
        var month = mydate.getMonth() + 1;
        if (month < 10)
            month = "0" + month;
        var daym = mydate.getDate();
        if (daym < 10)
            daym = "0" + daym;
        var mailOptions = {
            from: 'Tickets <wendycalizayaperez@gmail.com>', to: name,
            subject: 'Hola ' + nameClient,
            text: 'Hola Mundo',
            html:// fotos1+'<br><b style="color:#4D98F1;">Cliente: </b>'
                nameClient +
                '<br><b style="color:#4D98F1;">Codigo de reserva: </b>' + contra +
                '<br><b style="color:#4D98F1;">Numero de billete: </b>------------' +
                '<br><b style="color:#4D98F1;">NIT: </b>---------------' +
                '<br><b style="color:#4D98F1;">Telefono: </b>---------------' +
                '<br><b style="color:#4D98F1;">Fecha: </b>' +
                '<small><font><b>' + daym + '/' + month + '/' + year + '</b></font></small>' +
                '<br><b style="color:#4D98F1;">Direccion: </b>Escuela militar de ingeniera' +
                '<br><b style="color:#4D98F1;">NIT: </b>16036160' +
                '<div style="text-align:center;"><TABLE style="text-align:center;" border="1" cellpadding="0" cellspacing="0" width="50%"><TR><TD  width="50%" bgcolor="blue" style="color:#EFF3F9">Nombre del evento</TD><TD width="50%" bgcolor="blue" style="color:#EFF3F9">Cantidad de personas</TD><TD width="50%" bgcolor="blue" style="color:#EFF3F9">Monto unitario</TD><TD width="50%" bgcolor="blue" style="color:#EFF3F9">Monto total</TD></TR><TR><TD width="50%" style="color:#010A0C">2,1</TD><TD width="50%" style="color:#010A0C">2,2</TD><TD width="150%" style="color:#010A0C">2,3</TD><TD width="150%" style="color:#010A0C">4512</TD></TR></TABLE></div>' +
                ' <br><b style="color:#4D98F1;">la foto es: </b><!doctype html><html><head></head><body> '//+fotos
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                return console.log(error);
            }

            console.log('Mensaje enviado: ' + info.response);
        });
        // });	

    }
}
exports.formularioCliente = function (req, res, next) {
    email();
    //res.render('Evento/formularioPersonas');
}

exports.formularioClientePost = function (req, res, next) {
    var cod = ["cod1", "cod2"];
    /* for (var j = 0; j < (cod[0]+cod[1]); j++) {
         var listItem = req.body.createElement('li');
         listItem.textContent = superPowers[j];
         myList.appendChild(listItem);
     }*/
    item = {
        data: [
            {
                ci1: req.body.ci1,
                nombre1: req.body.nombre1,
                nacimiento1: req.body.nacimiento
            },
            {
                ci2: req.body.ci2,
                nombre2: req.body.nombre2,
                nacimiento2: req.body.nacimiento2
            }
        ],
        email: req.body.email
    }
    for (i in item.data) {
        let datastring = JSON.stringify(item.data[i]);
        qrImage
            .image(datastring, { type: 'jpg', size: 20 })
            .pipe(fs.createWriteStream(cod[i] + ".jpg"));
        console.log(item.data[i]);
    }
    res.redirect('/');
}