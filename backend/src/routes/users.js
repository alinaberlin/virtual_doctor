const express = require('express')

const router = express.Router()

const User = require('../models/user')
const ensureLogin =require('../middleware/ensure-login')
/* GET users listing. */
router.get('/', async (req, res) => {
  // res.send('respond with a resource');
  const query = {}
  if (req.query.email) {
    query.email = req.query.email
  }
  if (req.query.firstName) {
    query.firstName = req.query.firstName
  }
  if (req.query.lastName) {
    query.lastName = req.query.lastName
  }
  if (req.query.phoneNumber) {
    query.phoneNumber = req.query.phoneNumber
  }
  res.send(await User.find(query))
})

router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id)
  if (user) res.send(user)
  else res.sendStatus(404)
})
router.get('/init/initialize', async (req, res) => {
  const alina = new User({
    firstName: 'alina',
    lastName: 'Ghetler',
    phoneNumber: 1232,
    type: 'doctor',
    email: 'alina@gmai.com',
  })
  await alina.setPassword('test')
  await alina.save()

  // eslint-disable-next-line no-console
  console.log(alina)
  res.sendStatus(200)
})

/* Post create a user */

router.post('/', async (req, res) => {
  const createdUser = await User.create(req.body)
  res.send(createdUser)
})

module.exports = router
