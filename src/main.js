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
