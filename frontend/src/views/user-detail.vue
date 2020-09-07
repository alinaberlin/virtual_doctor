<script>
import axios from 'axios'
import UserCard from '@/components/user-card.vue'

export default {
  name: 'UserDetail',
  components: { UserCard },
  data() {
    return {
      user: {}
    }
  },
  async created() {
    const userRequest = await axios.get(`${process.env.VUE_APP_BASE_URL}/api/users/${this.$route.params.id}`)
    this.user = userRequest.data
  }
}
</script>
<template lang="pug">
  .about
    <h1>This is user detail page</h1>
    user-card(:user="user")
</template>
