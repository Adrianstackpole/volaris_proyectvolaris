const Settings = require('../models/Settings')

exports.getAll = async function (req, res) {
  const settings = await Settings.findAll()

  res.json(settings.reduce((prev, curr) => ({ ...prev, [curr.key]: curr.value }), {}))
}

exports.updateReferenceNumber = async function (req, res) {
  const { reference_number } = req.body

  const numeration = await Settings.findOne({ where: { key: 'numeration' } })

  numeration.value = reference_number

  await numeration.save()

  res.json({ message: 'numeration updated succesfully' })
}