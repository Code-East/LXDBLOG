import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            username: '123',
            password: '123'
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