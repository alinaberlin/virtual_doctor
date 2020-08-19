const express = require('express')

const router = express.Router()

/* GET session. */
router.get('/',  (req, res) => {
  res.send('send a session')
})

module.exports = router
