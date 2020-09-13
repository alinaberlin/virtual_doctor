const express = require('express')
const User = require('../models/user')

const router = express.Router()

router.get('/session', (req, res) => {
    res.send(req.session)
})
router.post('/', async (req, res) => {
    const { firstName, lastName, phoneNumber, type, age, email } = req.body
    const user = new User({ firstName, lastName, phoneNumber, email, password, type, age })

    await user.setPassword(password)
    await user.save()
    return user
})

module.exports = router

