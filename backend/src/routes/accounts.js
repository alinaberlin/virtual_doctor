const express = require('express')
const User = require('../models/user')

const router = express.Router()
const passport =require('passport')

router.get('/session', (req, res) => {
    res.send(req.session)
})
router.post('/', async (req, res) => {
    const { firstName, lastName, email, password, phoneNumber, type } = req.body
    const user = new User({ firstName, lastName, phoneNumber, email, password, type})

    await user.setPassword(password)
    await user.save()
    return user
})

router.post('/session', passport.authenticate('local'), async (req, res) => {
    res.send(req.user)
})

module.exports = router
