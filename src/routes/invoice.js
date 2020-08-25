const express = require('express')

const createInvoice = require('../services/invoice-service')
const calculateSessionPrice = require('../services/session-service')
const Session = require('../models/session')


const router = express.Router()

/* Create a invoice */
router.post('/invoice', async (req, res) => {
    const { sessionId } = { ...req.body }
    const session = await Session.findById(sessionId)
    const price = calculateSessionPrice(session, 10)
    const invoice = await createInvoice(session, price)
    res.send(invoice)

})
module.exports = router