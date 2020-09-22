<template>
        <form v-on:submit="doLogin">
            <div class="form-group">
                <label for="email"><b>Email</b></label>
                <input type="text" class="form-control" placeholder="Enter Email" name="email" required>
            </div>
            <div class="form-group">
                <label for="password"><b>Password</b></label>
                <input type="password" class="form-control" placeholder="Enter Password" name="password" required>
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
</template>

<script>
import router from "../router";
import axios from "axios";
import { mapState, mapActions } from "vuex";
export default {
    name: "Login",
    computed: {
        ...mapState(["currentUser"])
    },
    data() {
        return {
            email: "",
            password: ""
            };
    },
    methods: {
        ...mapActions(["login"]),
        doLogin(e) {
            e.preventDefault();
            let email = e.target.elements.email.value;
            let password = e.target.elements.password.value;

            let data = {
                email: email,
                password: password
            };
            this.login(data);
        }
    }
};

</script>
