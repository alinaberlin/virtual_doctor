const app = require('../src/app')
const request = require('supertest')
const User = require('../src/models/user')
const Appointment = require('../src/models/appointment')

const { importUsers } = require('./seed-importer')

describe('User Crud Test Suite', () => {
  beforeAll(async () => {
    require('../src/database-connection')
    await User.deleteMany({})
    await Appointment.deleteMany({})
    await importUsers()
  })

  afterAll(async () => {
    await User.deleteMany({})
    await Appointment.deleteMany({})
  })
  it('should create user succesfull', async () => {
    const userToCreate = {
      firstName: 'Dean2',
      lastName: 'Van2',
      email: 'van@2mail.de',
      password: '12342',
      phoneNumber: 1232,
      type: 'doctor',
    }
    const userCreated = (await request(app).post('/api/users').send(userToCreate)).body
    expect(userCreated.firstName).toBe(userToCreate.firstName)
  })

  it('should get users list', async () => {
    const userList = (await request(app).get('/api/users')).body
    const userExist = userList.length > 0

    expect(userExist).toBe(true)
  })

  it('should get users by email', async () => {
    const userList = (await request(app).get('/api/users?email=john@mail.de')).body
    const userExist = userList.length === 1

    expect(userExist).toBe(true)
  })
})
