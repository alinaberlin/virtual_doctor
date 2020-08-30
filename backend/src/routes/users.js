const express = require('express');

const router = express.Router();

const User = require('../models/user')
/* GET users listing. */
router.get('/', async(req, res) => {
  // res.send('respond with a resource');
  const query ={}
  if (req.query.firstName) {
    query.firstName = req.query.firstName
  }
  if (req.query.lastName) {
    query.firstName = req.query.lastName
  }
  if (req.query.phoneNumber) {
    query.phoneNumber= req.query.phoneNumber
  }
  res.send(await User.find(query))
});

router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id)
  if (user) res.send(user)
  else res.sendStatus(404)

})

/* Post create a user */

router.post('/', async(req, res) => {
  const createdUser = await User.create(req.body)
  res.send(createdUser)
})


module.exports = router;
