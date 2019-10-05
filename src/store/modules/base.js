const types = {
  SET_HEADER_TITLE: 'SET_HEADER_TITLE',
  SET_PREVENT_GOBACK: 'SET_PREVENT_GOBACK',
  SET_SHOW_BACK: 'SET_SHOW_BACK',
  SET_KEEP_ALIVE: 'SET_KEEP_ALIVE',
  SET_IS_MODAL_SHOW: 'SET_IS_MODAL_SHOW',
  SET_MODAL_COMPONENT_NAME: 'SET_MODAL_COMPONENT_NAME',
  SET_MODAL_COMPONENT_PROPS: 'SET_MODAL_COMPONENT_PROPS'
}

const state = {
  preventGoBack: false,
  showBack: false,
  headerTitle: '',
  keepAlive: false,
  modalComponentName: '',
  modalComponentProps: {},
  isModalShow: false
}

const getters = {
  preventGoBack: state => state.preventGoBack,
  showBack: state => state.showBack,
  headerTitle: state => state.headerTitle,
  keepAlive: state => state.keepAlive,
  isModalShow: state => state.isModalShow,
  modalComponentName: state => state.modalComponentName,
  modalComponentProps: state => state.modalComponentProps
}

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
  },
  [types.SET_IS_MODAL_SHOW] (state, flag) {
    state.isModalShow = flag
  },
  [types.SET_MODAL_COMPONENT_NAME] (state, name) {
    state.modalComponentName = () => import(`@/components/${name}`)
  },
  [types.SET_MODAL_COMPONENT_PROPS] (state, props) {
    state.modalComponentProps = props
  }
}

const actions = {
  setPageConfig: ({ commit }, { preventGoBack, showBack, headerTitle, keepAlive }) => {
    commit(types.SET_HEADER_TITLE, headerTitle)
    commit(types.SET_PREVENT_GOBACK, preventGoBack)
    commit(types.SET_SHOW_BACK, showBack)
    commit(types.SET_KEEP_ALIVE, keepAlive)
  },
  showGlobalModal: ({ commit }, { componentName, componentsProps }) => {
    commit(types.SET_IS_MODAL_SHOW, true)
    commit(types.SET_MODAL_COMPONENT_NAME, componentName)
    commit(types.SET_MODAL_COMPONENT_PROPS, componentsProps)
  },
  hideGlobalModal: ({ commit }) => {
    commit(types.SET_IS_MODAL_SHOW, false)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
