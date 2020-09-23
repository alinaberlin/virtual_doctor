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
    const userRequest = await axios.get(`/api/users/${this.$route.params.id}`)
    this.user = userRequest.data
  }
}
</script>
<template lang="pug">
  .about
    <h1>This is user detail page</h1>
    user-card(:user="user")
    v-col(cols="12" md="6" lg="4" xs="12")
    v-card.mx-auto.card(max-width="280")
      v-img(:src="user.image ? user.image : defaultImg"  aspect-ratio max-height="200px")
      v-card-title {{ user.name }}
      v-card-text.text--primary
      v-card-actions
        v-btn(text @click="") Explore
      v-expand-transition
        div(v-show="show")
          v-divider
          v-card-text {{ user.description }}

</template>
