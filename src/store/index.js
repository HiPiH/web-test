import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger';
import user from './modules/user'
import moscow from './modules/moscow'
import world from './modules/world'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    user,
    moscow,
    world
  },
  strict: debug,
  plugins: debug? [createLogger()] : []
})
