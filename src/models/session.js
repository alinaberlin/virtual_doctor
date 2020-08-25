
const mongoose = require('mongoose')

const autopopulate = require('mongoose-autopopulate')

const session = new mongoose.Schema({
  appointment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Appointment',
  }
})

session.plugin(autopopulate)

const Session = mongoose.model('Session', session)
module.exports = Session

// class Session {
//   constructor(id, appoitment) {
//     this.id = id
//     this.appoitment = appoitment
//   }
// }

// module.exports = Session
