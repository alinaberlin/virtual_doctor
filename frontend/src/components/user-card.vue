<script>
export default {
  name: 'UserCard',
  props: ['user']
}
</script>

<template lang="pug">
.box
  h1 {{ user.firstName }} {{ user.lastName }}
  h1 {{ user.phoneNumber }} {{ user.phoneNumber }}
</template>

<style lang="scss" scoped>
.box {
  padding: 2rem;
  border: 1px solid #333;
  background: #dd0;
  border-radius: 0.3rem;
}
</style>
