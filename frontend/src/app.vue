<script>
import axios from 'axios'
export default {
  name: 'App',
  async created() {
    console.log((await axios.get('/api/account/session')).data)
  }
}
</script>

<template lang="pug">
  v-app
    v-container
    #nav
      router-link(to="/") User
      router-link(to="/login") Login
      router-link(to="/registration") Registration
      router-link(to="/appointments") User Appointments
    router-view
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
