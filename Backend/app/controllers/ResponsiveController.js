const Employee = require('../models/Employee')
const Location = require('../models/Location')
const Position = require('../models/Position')
const Responsive = require('../models/Responsive')
const Settings = require('../models/Settings')

const generatePdf = require('../services/generate-pdf')

const fillReferenceNumber = require('../../utils/fillReferenceNumber')

exports.getAll = async function (req, res) {
  const responsives = await Responsive.findAll({
    attributes: [
      'id',
      'serial_number',
      'brand',
      'model',
      'type',
      'comment',
      'is_signed',
      'created_at'
    ],
    include: [
      {
        model: Employee,
        as: 'assigner',
      },
      {
        model: Employee,
        as: 'approver',
      },
      {
        model: Employee,
        as: 'receiver',
      },
      {
        model: Location,
        as: 'location',
      },
    ],
  })
  res.json(responsives)
}

exports.create = async function (req, res) {
  try {
    const {
      device,
      brand,
      serialNumber,
      model,
      description,
      assigner_id,
      receiver_id,
      location_id
    } = req.body

    const date = new Date()

    const numeration = await Settings.findOne({
      attributes: ['value'],
      where: { key: 'numeration' }
    })

    const location = await Location.findOne({
      attributes: ['name'],
      where: { id: location_id }
    })

    const locationName = location.dataValues.name

    const referenceNumberStr = fillReferenceNumber(numeration.dataValues.value)

    const name = `CRHT-${locationName}-AXT-LAP-${referenceNumberStr}`


    const newResponsive = Responsive.build({
      id: name,
      serial_number: serialNumber,
      brand,
      model,
      comment: description,
      type: device,
      receiver_id,
      assigner_id,
      location_id,
      created_at: date
    })

    const response = await newResponsive.save()

    numeration.value = Number(numeration.dataValues.value) + 1

    const responsive = await Responsive.findOne({
      where: { id: response.id },
      attributes: [
        'id',
        'serial_number',
        'brand',
        'model',
        'type',
        'comment',
        'is_signed',
        'created_at'
      ],
      include: [
        {
          model: Employee,
          as: 'assigner',
          include: [
            {
              model: Position,
              as: 'position'
            },
            {
              model: Location,
              as: 'location'
            },
          ]
        },
        {
          model: Employee,
          as: 'approver',
        },
        {
          model: Employee,
          as: 'receiver',
          include: [
            {
              model: Position,
              as: 'position'
            },
            {
              model: Location,
              as: 'location'
            },
          ]
        },
        {
          model: Location,
          as: 'location',
        },
      ],
      raw: true,
      nest: true
    })

    const fileName = await generatePdf({...responsive, referenceNumber: referenceNumberStr, date})

    res.json({ file: fileName })

  } catch (error) {
    console.log(error)
    res.status(500)
    res.json(error)
  }
}
