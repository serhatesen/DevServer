import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        register: {
            logo: require('@/assets/accounts.png')
        },
        login: {
            logo: require('@/assets/gamer.png')
        },
        users: [
            {
                kullanici: "",
                email: "",
                password: "",
            }
        ],
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {}
})
