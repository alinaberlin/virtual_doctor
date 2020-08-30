const users = [
  {
    firstName: 'John',
    lastName: 'Black',
    email: 'john@mail.de',
    password: '1234',
    phoneNumber: 123,
    type: 'doctor',
  },
  {
    firstName: 'Dean',
    lastName: 'Van',
    email: 'van@mail.de',
    password: '1234',
    phoneNumber: 123,
    type: 'doctor',
  },
  {
    firstName: 'Ada',
    lastName: 'Lovelance',
    email: 'ada@mail.de',
    password: '1234',
    phoneNumber: 123,
    type: 'patient',
  },
]
 const appointment = {
   name: 'Establish Diagnosis',
   startTime: '12/20/2020',
   duration: 10,
   type: 'consultation'
 }

module.exports = { users, appointment }
