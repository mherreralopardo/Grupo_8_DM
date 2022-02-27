const express = require('express');
const router = express.Router();
const productAPIController = require('../../controller/api/productAPIController');

//Rutas
//Listado de clientes | /api/clientes
router.get('/', productAPIController.productsList);
//Detalle de un cliente | /api/clientes/id
router.get('/:id', productAPIController.productDetail);


//

module.exports = router;