function loadPage(page) {
    $("#container-app").load("app/" + page + ".html", function (data) {
        console.log(data);        
    });
}

var app = $.sammy(function () {

    this.get('#/tickets', function () {
        loadPage('ticket/home')
        //your function
    });
    this.get('#/registros', function () {
        loadPage('registro/home')
        //your function
    });
    this.get('#/evento', function () {
        loadPage('evento/home')
        //your function
    });
    this.get('#/administracion', function () {
        loadPage('admin/home')
        //your function
    });
    this.get('#/prueba', function () {
        loadPage('prueba/home')
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

