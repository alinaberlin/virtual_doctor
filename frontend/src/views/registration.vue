<script>
// @ is an alias to /src
import { mapState, mapActions } from 'vuex'
export default {
    name: 'registration',
    computed: {
    ...mapState(['userDetails'])
    },
    data() {
    return {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: '',
        photo: '',
        type: '',
    }
    },
    methods: {
    ...mapActions(['createUser']),
    saveUser() {
        const { firstName, lastName, email, password, phoneNumber, type, photo} = this
        this.createUser({ firstName, lastName, email, password,type, phoneNumber, photo})
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
    input(type="text" v-model="lastName" placeholder="last name" name="lastName" class="form-control")
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
    input(type="text" v-model="photo" placeholder="photo" name="photo" class="form-control")
    div(class="form-group")
    label(for="type") Type
    select(v-model="type" name="type" class="form-control")
        option(value='patient') Patient
        option(value='doctor') Doctor
    button.post-user-button(@click="saveUser()" class="btn btn-primary") Register
    div
</template>

<style scoped></style>
