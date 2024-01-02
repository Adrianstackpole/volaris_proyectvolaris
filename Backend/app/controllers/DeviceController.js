const Device = require('../models/Device')

exports.getAll = async function (req, res) {
  const devices = await Device.findAll()

  res.json(devices)
}
