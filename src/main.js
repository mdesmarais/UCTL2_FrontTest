import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import vuetify from './plugins/vuetify'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(Vuex)

// this part resolve an issue where the markers would not appear
delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

const store = new Vuex.Store({
    state: {
        raceStartTime: Math.trunc(new Date().getTime() / 1000),
        // 0 : not started, 1 : live, 2 : finished
        raceStatus: 1,
        elapsedTimeFromRaceStart: 0,
        teams: []
    },
    mutations: {
        updateElapsedTime(state) {
            let now = Math.trunc(new Date().getTime() / 1000)
            state.elapsedTimeFromRaceStart = now - state.raceStartTime
        },
        updateTeams(state, updatedTeams) {
            state.teams = updatedTeams
        }
    }
})

setInterval(() => {
    store.commit('updateElapsedTime')
}, 1000)

setInterval(() => {
    axios.get('URL updateTeams')
    .then((response) => {
        // response ou response.teams
        let teams = response
        store.commit('updateTeams', teams)
    }, (error) => {
        error
    })
}, 10000)

new Vue({
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
