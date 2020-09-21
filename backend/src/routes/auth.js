const express = require('express')
const router = express.Router
const User = require('../models/user')

router.post('/register', (req, res, next)=> {
    User.register({ username: req.body.firstName }, req.body.password, (err, account) => {
        res.send('OK')
    })
})

exports.module = router