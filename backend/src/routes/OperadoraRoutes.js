const router = require('express').Router();

const OperadoraController = require('../controller/OperadoraController.js');

router.get('/operadoras', OperadoraController.carregarTodasOperadoras);

module.exports = router;
