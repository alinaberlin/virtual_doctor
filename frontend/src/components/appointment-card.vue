<script>
export default {
  name: 'Appointment',
  props: ['appointment']
}
</script>

<template lang="pug">
.box
  h1 {{name }}
</template>

<style lang="scss" scoped>
.box {
  padding: 2rem;
  border: 1px solid #333;
  background: #dd0;
  border-radius: 0.3rem;
}
</style>
