class PaymentDetails {
  constructor(address, name, paymentReference, type, expiringMonth, expiringYear, lastFourDigits, patient) {
    this.address = address
    this.name = name
    this.paymentReference = paymentReference
    this.type = type
    this.expiringMonth = expiringMonth
    this.expiringYear = expiringYear
    this.lastFourDigits = lastFourDigits
    this.patient = patient
  }
}
module.exports = PaymentDetails
