const express = require('express')

const router = express.Router()

/* GET users listing. */
router.get('/', async(req, res)=> {
   res.send('send a appoitment')
})

module.exports = router