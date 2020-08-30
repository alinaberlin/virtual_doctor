const calculateSessionPrice = (session, pricePerMinute) => {
  const appointment = { ...session.appointment }
  const price = appointment.duration * pricePerMinute
  return price
}

module.exports = { calculateSessionPrice }
