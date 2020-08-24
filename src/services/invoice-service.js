const PaymentDetails = require('../models/payment_details')

const createinvoice = async (session, price) => {
    const userId = session.appointment.patient.id;
    const paymentDetails = await PaymentDetails.find({userId})
    const invoice = {}
    return invoice
}