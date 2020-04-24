import Vue from 'vue';
import Vuex from 'vuex';


import PortalVue from 'portal-vue'


import { BootstrapVue, IconsPlugin  } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../public/theme.css'
import '@fortawesome/fontawesome-free/css/all.css'
import "vue-multiselect/dist/vue-multiselect.min.css"



import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import 'vue-awesome/icons'


import chartjs from "vue-chartjs"
import chartjsPluginTreadline from "chartjs-plugin-trendline"

import VueMapbox from "vue-mapbox";
import Mapbox from "mapbox-gl";

Vue.use(VueMapbox, { mapboxgl: Mapbox });


import Multiselect from 'vue-multiselect'



Vue.config.productionTip = false

Vue.use(Vuex);
Vue.use(PortalVue)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueSidebarMenu)

Vue.use(chartjs)
Vue.use(chartjsPluginTreadline)

Vue.component('multiselect', Multiselect)


import App from './App.vue'
import store from './store'
import router from './router'




new Vue({
  router,
  store: store,
  render: h => h(App)

}).$mount('#app')
