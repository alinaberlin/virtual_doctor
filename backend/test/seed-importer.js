/* eslint-disable no-underscore-dangle */
const User = require('../src/models/user')
const Appointment =  require('../src/models/appointment')

const { users, appointment } = require('./seeds/users')
const usersIds = []

const importUsers = async () => {
    const promises = []
    users.forEach(user => promises.push(User.create(user)))
    const savedUsers = await Promise.all(promises)
    const idDoctor = savedUsers.filter(user => user.type === 'doctor')[0]._id
    const idPatient = savedUsers.filter(user => user.type === 'patient')[0]._id
    appointment.doctor = idDoctor
    appointment.patient = idPatient
    usersIds.push(idDoctor, idPatient)
    await Appointment.create(appointment)
}

module.exports = { importUsers, usersIds }