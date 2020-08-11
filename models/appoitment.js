class Appoitment {
  constructor(id, startTime, duration, type, doctor, patient) {
    this.id = id
    this.startTime = startTime
    this.duration = duration
    this.type = type
    this.doctor = doctor
    this.patient = patient
  }

  cancelAppointment() {
    this.doctor.appointments = this.doctor.appointments.filter(el => el.id !== this.id)
    this.patient.appointments = this.patient.appointments.filter(el => el.id !== this.id)
  }
}

module.exports = Appoitment
