$(document).ready(function () {
    $('#btn-Editar').click(function () {
        var url = "/admin/EliminarEventos";
        $.ajax({
            type: "DELETE",
            url: url,
          /*  data: $("#formulario").serialize(),
            success: function (data) {
                console.log(data);
            }*/
        });
    });

});