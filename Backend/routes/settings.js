const express = require('express')
const router = express.Router()
const SettingsController = require('../app/controllers/SettingsController')

router.get('/api/settings', SettingsController.getAll)
router.put('/api/settings/reference_number', SettingsController.updateReferenceNumber)

module.exports = router
