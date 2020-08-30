const app = require('../src/app')
const request = require('supertest')
const Appointment = require('../src/models/appointment')
const { importAppointment, usersIds } = require('./seed-importer')


describe('Appointment Crud Test Suite', () => {
  beforeAll(async () => {
    require('../src/database-connection')
    await Appointment.deleteMany({})
    await importAppointment()
  })

  afterAll(async () => {
    await Appointment.deleteMany({})
  })
  it('should create appointment succesfull', async () => {
      const appointmentToCreate = {
          name: "Establish Diagnostic 2",
          startTime: new Date(),
          duration: 10,
          type: 'consulation',
          doctor: usersIds[0],
          patient:usersIds[1]
    }
    const appoitmentCreated = (await request(app).post('/api/appointment').send(appointmentToCreate)).body
    expect(appoitmentCreated.name).toBe(appointmentToCreate.name)
  })