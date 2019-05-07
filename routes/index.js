const express = require('express');
const router = express.Router();
let common = require('../controller/common')
const Task = require('../model/task');
/*router.get('/', async (req, res) => {//para que responda
  const tasks = await Task.find();
  res.render('index', {//estoy renderizando una vista
    tasks
  });
});*/
/* GET home page. */
router.get('/', common.home);
router.post('/add', async (req, res, next) => {
    const task = new Task(req.body);
    await task.save();
    res.redirect('/');
  });
  router.get('/turn/:id', async (req, res, next) => {
    let { id } = req.params;
    const task = await Task.findById(id);
    task.status = !task.status;
    await task.save();
    res.redirect('/');
  });
  
  
  router.get('/edit/:id', async (req, res, next) => {
    const task = await Task.findById(req.params.id);
    console.log(task)
    res.render('edit', { task });
  });
  
  router.post('/edit/:id', async (req, res, next) => {
    const { id } = req.params;
    await Task.update({_id: id}, req.body);
    res.redirect('/');
  });
  
  router.get('/delete/:id', async (req, res, next) => {
    let { id } = req.params;
    await Task.remove({_id: id});
    res.redirect('/');
  });
/* GET Evento page. */
let pedido = require('../controller/pedido')
router.get('/evento', pedido.eventoDetalle);

router.post('/evento', pedido.eventoDetallePost);

router.get('/evento/asientos', pedido.asientoDetalle);

/* GET users listing. */
let users = require('../controller/users')
router.get('/CrearUsuario', users.CrearUsuarioGet);

router.post('/CrearUsuario', users.CrearUsuarioPost);

router.get('/MostratUsuarios', users.MostrarUsuarios);

router.get('/Login', users.logginGet);

router.post('/Login', users.logginPost);

module.exports = router;
