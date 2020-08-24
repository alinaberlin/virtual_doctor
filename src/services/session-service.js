const Session = require('../models/session')

const calculateSessionPrice = async (sessionId, pricePerMinute) => {
    const session = await Session.findById(sessionId);
    const appointment = { ...session.appointment };
    const price = appointment.duration * pricePerMinute;
    return price;
}

module.exports = { calculateSessionPrice }