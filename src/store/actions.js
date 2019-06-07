import * as types from './mutation-types'

// 根据路由meta配置页面
export const setPageConfig = ({ state, commit }, { preventGoBack, showBack, headerTitle, keepAlive }) => {
  commit(types.SET_HEADER_TITLE, headerTitle)
  commit(types.SET_PREVENT_GOBACK, preventGoBack)
  commit(types.SET_SHOW_BACK, showBack)
  commit(types.SET_KEEP_ALIVE, keepAlive)
}
