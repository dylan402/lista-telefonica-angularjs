const router = require('express').Router();

const ContatoController = require('../controller/ContatoController.js');

router.get('/contatos', ContatoController.carregarTodosContatos);
router.get('/contatos/:id', ContatoController.carregarContato);
router.post('/contatos', ContatoController.adicionarContato);

module.exports = router;
