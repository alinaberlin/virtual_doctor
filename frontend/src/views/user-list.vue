<script>
import axios from 'axios'
import UserCard from '../components/user-card.vue'
export default {
  name: 'User',
  components: { UserCard },
  data() {
    return {
      users: []
    }
  },
  async created() {
    const usersRequest = await axios.get(`${process.env.VUE_APP_BASE_URL}/api/users`)
    console.log('boule', usersRequest.data)
    this.users = usersRequest.data
  }
}
</script>

<template lang="pug">
  .home
    h1 Virtual Doctor
    div(v-for="user in users")
      user-card(:user="user")
      router-link(:to="`/users/${user._id}`") {{user.firstName}}
</template>
