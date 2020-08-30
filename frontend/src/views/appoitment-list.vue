<script>
import axios from "axios"
import AppointmentCard from '../appointment-card.vue'

export default {
    name :Appointment,
    data() {
        return {
            users: []
        }
    },
    async created() {
    const AppointmentRequest = await axios.get(`/api/appointment`)
    this.users = usersRequest.data
  }
}

</script>

<template lang="pug">
  .home
    h1 Virtual Doctor
    div(v-for="appoitment in appoitments")
      router-link(:to="`/users/${appoitment._id}`") {{appoitment.name}}
</template>
