import Vuex from 'vuex'
import Vue from 'vue'
import base from './modules/base'
// 可打印vuex日志
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    base
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
