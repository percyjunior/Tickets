$(document).ready(function () {
    $('#btn-ingresar2').click(function () {
        var url = "/admin/nuevoAsiento";
        $.ajax({
            type: "POST",
            url: url,
            data: $("#formulario2").serialize(),
            success: function (data) {
                console.log(data);
            }
        });
    });

});

