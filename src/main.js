import Vue from 'vue'
import App from './App.vue'
import store from './store.js'

import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import vuetify from './plugins/vuetify'
import axios from 'axios'

Vue.config.productionTip = false

// this part resolve an issue where the markers would not appear
delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

const API_URL = 'http://127.0.0.1:5000'
const API_ACTIONS = {
    UPDATE_RACE_POINTS: '/getRacePoints',
    UPDATE_STATUS: '/race-status',
    UPDATE_TEAMS: '/teams'
}

// Récupération des points de course
// @TODO faire la requête tant qu'il y a une erreur
/*axios.get(API_URL + API_ACTIONS.UPDATE_RACE_POINTS)
.then((response) => {
    store.commit('updateRacePoints', response.data.points)
}, (error) => {
    error
})*/

var ws = new WebSocket('ws://127.0.0.1:5678')

ws.onmessage = function(e) {
    var event = JSON.parse(e.data)
    console.log(event)
    
    if (event.id == 1) {
        store.commit('updateRaceStatus', event.data)
    }
    console.log(store.state.raceStatus)
}

/*setInterval(() => {
    // Récupérations du statut de la course
    axios.get(API_URL + API_ACTIONS.UPDATE_STATUS)
    .then((response) => {
        const race = response.data
        store.commit('updateRaceStatus', race)
    }, (error) => {
        error
    })

    // Récupérations des équipes
    axios.get(API_URL + API_ACTIONS.UPDATE_TEAMS)
    .then((response) => {
        let teams = response.data
        store.commit('updateTeams', teams)
    }, (error) => {
        error
    })
}, 10000)*/

new Vue({
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
