<script>
import axios from 'axios'

export default {
  name: 'Appointment',
  data() {
    return {
      appointments: []
    }
  },
  async created() {
    const appointmentRequest = await axios.get(`${process.env.VUE_APP_BASE_URL}/api/appointment`)
    this.appointments = appointmentRequest.data
  }
}
</script>

<template lang="pug">
  .home
    h1 Virtual Doctor
    div(v-for="appointment in appointments")
      router-link(:to="`/users/${appointment._id}`") {{appointment.name}}
</template>
