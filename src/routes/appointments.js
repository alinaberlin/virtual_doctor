const express = require('express')

const router = express.Router()

const Appointment = require('../models/appointment')

/* GET users listing. */
router.get('/', async (req, res) => {
  res.send('send a appoitment')
})
router.post('/', async (req, res) => {
  const createAppoitment = await Appointment.create(req.body)
  res.send(createAppoitment)
})
module.exports = router
