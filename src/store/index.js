import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            username: '',
            password: ''
        }
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        }
    },
    getters: {
        getUser(state) {
            // console.log(state.user);
            return state.user
        },
    },
    actions: {},
    modules: {}
})