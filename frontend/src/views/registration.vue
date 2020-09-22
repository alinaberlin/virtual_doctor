<script>
// @ is an alias to /src
import { mapState, mapActions } from 'vuex'
export default {
    name: 'registration',
    computed: {
    ...mapState(['userDetails', 'sports'])
    },
    data() {
    return {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: '',
        type: '',
    }
    },
    methods: {
    ...mapActions(['createUser']),
    saveUser() {
        const { firstName, secondName, email, password, phoneNumber, type} = this
        this.createUser({ firstName, secondName, email, password, phoneNumber})
    }
    },
    created() {}
}
</script>

<template lang="pug">
main
    h2 Register here
    div(class="form-group")
    label(for="firstName") First name
    input(type="text" v-model="firstName" placeholder="first name" name="firstName" class="form-control")
    div(class="form-group")
    label(for="lastName") Last name
    input(type="text" v-model="secondName" placeholder="last name" name="lastName" class="form-control")
    div(class="form-group")
    label(for="email") Email
    input(type="email" v-model="email" placeholder="email" class="form-control")
    div(class="form-group")
    label(for="password") Password
    input(type="password" v-model="password" placeholder="password" name="password" class="form-control")
    div(class="form-group")
    label(for="phoneNumber") phoneNumber
    input(type="text" v-model="phoneNumber" placeholder="Phone Number" name="phoneNumber" class="form-control")
    div(class="form-group")
    label(for="type") Type
    select(v-model="type" name="type" class="form-control")
    option(value='patient') Patient
    option(value='doctor') Doctor
    button.post-user-button(@click="saveUser()" class="btn btn-primary") Register
    div
</template>

<style scoped></style>
