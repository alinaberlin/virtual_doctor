class Invoice {
  constructor(id, invoiceNumber, paymentDetails, status, grossValue, tax, date, session) {
    this.id = id
    this.invoiceNumber = invoiceNumber
    this.paymentDetails = paymentDetails
    this.status = status
    this.grossValue = grossValue
    this.tax = tax
    this.date = date
    this.session = session
  }

  stornInvoice() {
    this.status = 'STORNO'
    this.paymentDetails.invoices = this.paymentDetails.invoices.filter(el => el !== this.id).push(this)
  }

  getNetValue() {
    const netValue = this.grossValue / (1 + this.tax)
    return netValue
  }
}
module.exports = Invoice
