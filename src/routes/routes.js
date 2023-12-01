const express = require('express')
const router = express.Router()
const CityController = require('../controllers/CityController')

router.post('/city/create', CityController.create)
router.get('/city/getAll', CityController.getAll)
router.get('/city/:id', CityController.get)
router.put('/city/update/:id', CityController.update)
router.put('/city/delete/:id', CityController.delete)

module.exports = router