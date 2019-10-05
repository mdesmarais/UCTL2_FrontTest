import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import vuetify from './plugins/vuetify'

import 'foundation-sites/dist/css/foundation.min.css'
import 'foundation-sites/dist/js/foundation.min.js'

import '@fortawesome/fontawesome-free/js/all.min.js'

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
            updatedTeams.forEach(team => {
                let id = 'team' + team.id
                let pouet = state.teams.findIndex(teamFind => {
                    if (teamFind.id == id) {
                        return teamFind
                    }
                })

                if (pouet >= 0) {
                    //console.log('Team ' + team.name + ' is already saved')
                    state.teams[pouet] = team
                }
                else {
                    team.id = id
                    state.teams.push(team)
                    //console.log('Team ' + team.name + ' has been added')
                }
            })
        }
    }
})

setInterval(() => {
    store.commit('updateElapsedTime')
}, 1000)

setInterval(() => {
    let teams = []
    let i = Math.floor(Math.random() * 10)
    let team = {
        id: i,
        name: "Team " + i,
        rank: Math.floor(Math.random() * 7),
        lastRank: Math.floor(Math.random() * 7)
    }
    teams.push(team)
    store.commit('updateTeams', teams)
}, 5000)

new Vue({
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
