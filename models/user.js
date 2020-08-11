class User {
  constructor(id,firstName, lastName, email, password, phoneNumber, type) {
    this.id =id
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.password = password
    this.phoneNumber = phoneNumber
    this.type = type
    this.appointments = []
  }

  addAppointment(appointment) {
    this.appointments.push(appointment)
  }
}

module.exports = User
