import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        not404: true
    },
    mutations: {
        set404(state, cont) {
            state.not404 = cont;
        }
    },
    getters: {
        get404(state) {
            return state.not404
        },
    },
    actions: {},
    modules: {}
})