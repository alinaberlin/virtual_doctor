class PaymentDetails {
  constructor(id, address, name, paymentReference, type, expiringMonth, expiringYear, lastFourDigits, patient) {
    this.id = id
    this.address = address
    this.name = name
    this.paymentReference = paymentReference
    this.type = type
    this.expiringMonth = expiringMonth
    this.expiringYear = expiringYear
    this.lastFourDigits = lastFourDigits
    this.patient = patient
    this.invoices = []
  }

  createInvoice(invoice) {
    this.invoices.push(invoice)
  }
}
module.exports = PaymentDetails
