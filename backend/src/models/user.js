const mongoose = require('mongoose')

const autopopulate = require('mongoose-autopopulate')

const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
    unique:true
  },
  type: {
    type: String,
    enum: ['doctor', 'patient'],
    required: true,
  },
  appointments: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' }]
})
userSchema.plugin(autopopulate)
const User = mongoose.model('User', userSchema)
userSchema.plugin(passportLocalMongoose, {
  usernameField: "email",
  
})

module.exports = User


// class User {
//   constructor(id,firstName, lastName, email, password, phoneNumber, type) {
//     this.id =id
//     this.firstName = firstName
//     this.lastName = lastName
//     this.email = email
//     this.password = password
//     this.phoneNumber = phoneNumber
//     this.type = type
//     this.appointments = []
//   }

//   addAppointment(appointment) {
//     this.appointments.push(appointment)
//   }
// }

// module.exports = User
