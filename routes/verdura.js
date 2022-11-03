const express = require('express');
const router = express.Router();
const verduraController = require('../controllers/verdura')

//Servicio para mostrar verduras
router.get('/verVerduras',verduraController.getVerVerdura);
//Servicio para agregar verdura
router.post('/agregarVerdura',verduraController.postAgregarVerdura);

module.exports = router