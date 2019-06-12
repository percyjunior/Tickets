$(document).ready(function () {
    $('#btn-ingresar').click(function () {
        var url = "/admin/nuevoEvento";
        $.ajax({
            type: "POST",
            url: url,
            data: $("#formulario").serialize(),
            success: function (data) {
                console.log(data);
            }
        });
    });

});

