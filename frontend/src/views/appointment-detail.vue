<script>
import axios from 'axios'
import AppointmentCard from '@/components/appointment-card.vue'

export default {
  name: 'AppointmentDetail',
  components: { AppointmentCard },
  data() {
    return {
      appointment: {}
    }
  },
  async created() {
    const appointmentRequest = await axios.get(`/api/appointments/${this.$route.params.id}`)
    this.appointment = appointmentRequest.data
  }
}
</script>
<template lang="pug">
  .about
    <h1>This is appointment detail page</h1>
    appointment-card(:appointment="appointment")
</template>
