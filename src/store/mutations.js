import * as types from './mutation-types'

const mutations = {
  [types.SET_HEADER_TITLE] (state, title) {
    state.headerTitle = title
  },
  [types.SET_SHOW_BACK] (state, flag) {
    state.showBack = flag
  },
  [types.SET_PREVENT_GOBACK] (state, flag) {
    state.preventGoBack = flag
  },
  [types.SET_KEEP_ALIVE] (state, flag) {
    state.keepAlive = flag
  }
}

export default mutations
