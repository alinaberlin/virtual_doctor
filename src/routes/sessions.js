const express = require('express')
const Session = require('../models/session')

const router = express.Router()

/* GET session. */
router.get('/', async (req, res) => {
  const query = {}
  if (req.query.appointmentId) {
    query.appointment = req.query.appointmentId
  }
  await res.send('send a session')
})
/* Post create a session */
router.post('/', async(req, res) => {
  const createSession = await Session.create(req.body)
  res.send(createSession)
})

module.exports = router
