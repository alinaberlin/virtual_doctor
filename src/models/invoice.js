
const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const invoiceSchema = new mongoose.Schema({
  invoiceNumber: {
    type: Number,
    required: true,
    unique: true
  },
  paymentDetails: {
    type: String,
    required: true,
    unique: true
  },
  status: {
    type: Boolean,
    required: true
  },
  grossValue: {
    type:Number,
    required:true
  },
  tax: {
    type: Number,
    required:true
  },
  date: {
    type: Data,
    required:true
  },
  session: {
    type: String,
    required:true
  }
})
const Invoice = mongoose.model('Invoice', invoiceSchema)
module.exports = Invoice
// class Invoice {
//   constructor(id, invoiceNumber, paymentDetails, status, grossValue, tax, date, session) {
//     this.id = id
//     this.invoiceNumber = invoiceNumber
//     this.paymentDetails = paymentDetails
//     this.status = status
//     this.grossValue = grossValue
//     this.tax = tax
//     this.date = date
//     this.session = session
//   }

//   stornInvoice() {
//     this.status = 'STORNO'
//     this.paymentDetails.invoices = this.paymentDetails.invoices.filter(el => el !== this.id).push(this)
//   }

//   getNetValue() {
//     const netValue = this.grossValue / (1 + this.tax)
//     return netValue
//   }
// }
// module.exports = Invoice