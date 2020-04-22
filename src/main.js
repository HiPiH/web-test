import Vue from 'vue';
import Vuex from 'vuex';


Vue.config.productionTip = false


Vue.use(Vuex);


import App from './App.vue'
import store from './store'
import router from './router'




new Vue({
  router,
  store: store,
  render: h => h(App)

}).$mount('#app')
