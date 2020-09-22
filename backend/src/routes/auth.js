const express = require('express')

const router = express.Router()
const passport = require('passport')
const User = require('../models/user')

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err)
        }

        if (!user) {
            return res.status(400).send([user, 'Cannot log in', info])
        }

        req.login(user, err => {
            res.send(user)
        })
    })(req, res, next)
})
router.get('/logout', function (req, res) {
    req.logout()

    console.log('logged out')

    return res.send()
})

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
