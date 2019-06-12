$(document).ready(function () {
    cargarDatos();
    function cargarDatos() {
        $.ajax({
            url: '/admin/nuevoEvento',
            type: "GET",
            success: function (data) {
                console.log(data);
                generarTabla(data);
            }, error: function (error) {
                console.log(error);
            }
        })

    }

    function generarTabla(data) {
        data.forEach(function (element, index) {
            var fila= $('<tr>').append($('<td>').html(element.nombre));
            fila.append($('<td>').html(element.edad))
            $('#mytable').addClass('table').append(fila);
        })

    }

})