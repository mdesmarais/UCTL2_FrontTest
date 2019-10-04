import Vue from 'vue'
import App from './App.vue'

import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import vuetify from './plugins/vuetify'

import 'foundation-sites/dist/css/foundation.min.css'
import 'foundation-sites/dist/js/foundation.min.js'

Vue.config.productionTip = false

// this part resolve an issue where the markers would not appear
delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
