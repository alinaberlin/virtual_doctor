const Invoice = require('../models/invoice')
const PaymentDetails = require('../models/payment_details')

const createInvoice = async (session, price) => {
    const userId = session.appointment.patient.id;
    const paymentDetails = await PaymentDetails.find({ userId })
    const lastInvoice = await Invoice.findOne({}).sort({ invoiceNumber: 'desc' })
    const invoiceNumber = lastInvoice ? lastInvoice.invoiceNumber + 1 : 1;
    const tax = price / (1 + 0.19)
    const invoice = await Invoice.create({
      invoiceNumber,
      payment_details: paymentDetails,
      status: 'Open',
      grossValue: price,
      tax,
      date: new Date(),
      session
    })

    return invoice
}

module.exports = createInvoice