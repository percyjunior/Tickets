function loadPage(page) {
    $("#container-app").load("app/" + page + ".html", function (data) {
       // console.log(data);        
    });
}

var app = $.sammy(function () {

    this.get('#/Evento', function () {
        loadPage('ticket/home')
        //your function
    });

    this.get('#/roles/Mostrar', function () {
        loadPage('Roles/mostrar')
        //your function
    });
    this.get('#/roles', function () {
        loadPage('Roles/crear')
        //your function
    });
    this.get('#/Reporte/Evento', function () {
        loadPage('Reportes/mostrar')
        //your function
    });
    this.get('#/Iniciar', function () {
        loadPage('login/login')
        //your function
    });
    this.get('#/Evento/Mostrar', function () {
        loadPage('ticket/mostrar')
        //your function
    });
    this.get('#/Asiento/Mostrar', function () {
        loadPage('Asiento/mostrar')
        //your function
    });
    this.get('#/registros', function () {
        loadPage('registro/home')
        //your function
    });
    this.get('#/Tickets', function () {
        loadPage('evento/home')
        //your function
    });
    this.get('#/administracion', function () {
        loadPage('admin/home')
        //your function
    });
    this.get('#/Asiento', function () {
        loadPage('Asiento/Asiento')
        //your function
    });
    this.get('#/plan_asis', function () {
        loadPage('plan_asis/Planilla_Asistencia')
        //your function
    });
    this.get('#/plandocente', function () {
        loadPage('plandocente/PlanDocente')
        //your function
    });
    this.get('#/', function () {
        loadPage('evento/home')
    });
});
app.run('#/');

