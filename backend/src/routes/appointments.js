const express = require('express')

const router = express.Router()

const Appointment = require('../models/appointment')

/* GET users listing. */
router.get('/', async (req, res) => {
  res.send('send a appointment')
})
router.get('/:id', async (req, res) => {
  const appointment = await Appointment.findById(req.params.id)
  if (appointment) res.send(appointment)
  else res.sendStatus(404)
})
router.post('/', async (req, res) => {
  const createAppoitment = await Appointment.create(req.body)
  res.send(createAppoitment)
})

module.exports = router
