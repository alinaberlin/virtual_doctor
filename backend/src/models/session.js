
const mongoose = require('mongoose')

const autopopulate = require('mongoose-autopopulate')

const sessionSchema = new mongoose.Schema({
  appointment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Appointment',
  }
})

sessionSchema.plugin(autopopulate)

const Session = mongoose.model('Session', sessionSchema)
module.exports = Session

// class Session {
//   constructor(id, appoitment) {
//     this.id = id
//     this.appoitment = appoitment
//   }
// }

// module.exports = Session
