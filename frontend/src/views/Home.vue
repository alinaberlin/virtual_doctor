<template lang="pug">
  .home
    div(v-for="user in users") {{ user.firstName }}
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
  components: {},
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
