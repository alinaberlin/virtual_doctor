const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')


const paymentDetails = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  paymentReference: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['CC', 'PayPal', 'SEPA'],
    required: true,
  },
  expiringMonth: {
    type: Number,
    min: 1,
    max: 12,
    required: true,
  },
  expiringYear: {
    type: Number,
    min: 2020,
    max: 2030,
    required: true,
  },
  lastFourDigits: {
    type: String,
    required: true,
  },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    autopopulate: true,
  },
})
paymentDetails.plugin(autopopulate)
const PaymentDetails = mongoose.model('PaymentDetails', paymentDetails)
module.exports = PaymentDetails
// class PaymentDetails {
//   constructor(id, address, name, paymentReference, type, expiringMonth, expiringYear, lastFourDigits, patient) {
//     this.id = id
//     this.address = address
//     this.name = name
//     this.paymentReference = paymentReference
//     this.type = type
//     this.expiringMonth = expiringMonth
//     this.expiringYear = expiringYear
//     this.lastFourDigits = lastFourDigits
//     this.patient = patient
//     this.invoices = []
//   }

//   createInvoice(invoice) {
//     this.invoices.push(invoice)
//   }
// }
// module.exports = PaymentDetails
