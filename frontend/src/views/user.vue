<script>
import axios from 'axios'
import UserCard from '@/components/user-card.vue'

export default {
  name: 'User',
  components: {
    UserCard
    },
  data() {
    return {
      users: []
    }
  },
  async created() {
    const usersRequest = await axios.get('/api/users')
    this.users = usersRequest.data
  }
}
</script>

<template lang="pug">
  .home
    h1 Virtual Doctor
    user-card
    div(v-for="user in users") {{ user.firstName }}
</template>
