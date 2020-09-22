const express = require('express')

const router = express.Router()
const passport = require('passport')
const User = require('../models/user')


router.post('/register', (req, res, next) => {
    User.register({ username: req.body.firstName }, req.body.password, (err, response) => {
        res.send('OK')
    })
})

router.post(
    '/local',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: 'auth/login',
    })
)

module.exports = router
