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

</script>
