const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const appointmentSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
    enum: [30, 40]
  },
  type: {
    type: String,
    enum:['Establish diagnostic', 'Check up'],
    required: true,
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    autopopulate: true,
  },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    autopopulate: true,
  }
})

appointmentSchema.plugin(autopopulate)
const Appointment = mongoose.model('Appointment', appointmentSchema)
module.exports = Appointment
// class Appoitment {
//   constructor(id, startTime, duration, type, doctor, patient) {
//     this.id = id
//     this.startTime = startTime
//     this.duration = duration
//     this.type = type
//     this.doctor = doctor
//     this.patient = patient
//   }

//   cancelAppointment() {
//     this.doctor.appointments = this.doctor.appointments.filter(el => el.id !== this.id)
//     this.patient.appointments = this.patient.appointments.filter(el => el.id !== this.id)
//   }
// }
