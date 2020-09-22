import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'


axios.defaults.baseURL = process.env.VUE_APP_BASE_URL
axios.default.withCredentials = true

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    user: {},
    appointments: [],
    appointment: {},
    userDetails: {},
    appoinmentDetail: {},
    curentUser: undefined
  },
  mutations: {
    SET_USERS(state, data) {
      state.users = data;
    },
    SET_USER(state, data) {
      state.user = data;
    },
    SAVE_NEW_USER(state, data) {
      state.userDetails = data;
    },
    SET_CURRENT_USER(state, data) {
      state.currentUser = data;
    },
    SET_APPOINTMENT(state, data) {
      state.appointment = data;
    },
    SAVE_NEW_APPOINTMENT(state, data) {
      state.appointmentDetails = data;
    },
    SET_APPOINTMENTs(state, data) {
      state.appointments = data;
    }
  },
    actions: {
      async fetchUsers({ commit }) {
        if (!this.state.currentUser) {
          router.push("/login");
          return;
        }
        const result = await transport.get(`${apiUrl}/api/users`);
        commit("SET_USERS", result.data);
      },
      async login({ commit }, loginData) {
        try {
          const result = await transport.post(`${apiUrl}/api/auth/login`, loginData);
          commit("SET_CURRENT_USER", result.data);
          router.push("/users");
        } catch (e) {
          commit("SET_CURRENT_USER", undefined);
          console.error("Invalid login data", e);
        }
      }
    },
    modules: {}
  })
