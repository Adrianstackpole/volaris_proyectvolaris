const express = require('express')
const router = express.Router()
const DeviceController = require('../app/controllers/DeviceController')


router.get('/api/devices', DeviceController.getAll)

module.exports = router
