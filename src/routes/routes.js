const express = require('express')
const router = express.Router()
const CityController = require('../controllers/CityController')
const PlaceController = require('../controllers/PlaceController')

router.post('/city/create', CityController.create)
router.get('/city/getAll', CityController.getAll)
router.get('/city/:id', CityController.get)
router.put('/city/update/:id', CityController.update)
router.put('/city/delete/:id', CityController.delete)

router.get('/place/:cep', PlaceController.getByCEP)

module.exports = router