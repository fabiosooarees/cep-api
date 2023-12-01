const connection = require('../database/connection')
const express = require('express')
const router = express.Router()
const CityController = require('../controllers/CityController')

router.post('/create', CityController.create)
router.get('/getAll', CityController.getAll)

module.exports = router