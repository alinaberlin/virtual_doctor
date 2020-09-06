const calculateSessionPrice = (session, pricePerMinute) => {
  const appointment = { ...session.appointment }
  const price = appointment.duration * pricePerMinute
  return price
}
//* should limited in appoitment js
module.exports = { calculateSessionPrice }
