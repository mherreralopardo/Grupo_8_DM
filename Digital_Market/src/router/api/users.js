const express = require('express');
const router = express.Router();
const userAPIController = require('../../controller/api/userAPIController');

//Rutas
//Listado de clientes | /api/clientes
router.get('/', userAPIController.list);
//Detalle de un cliente | /api/clientes/id
router.get('/:id', userAPIController.detail);

//

module.exports = router;