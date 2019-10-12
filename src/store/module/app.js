const types = {
  TOGGLE_SIDEBAR: 'TOGGLE_SIDEBAR' 
}

const state = {
  sidebarOpen: false
}

const getters = {
  sidebarOpen: state => state.sidebarOpen
}

const actions = {
  toggleSidebar ({ commit, state }) {
    commit(types.TOGGLE_SIDEBAR)

  }
}

const mutations = {
  [types.TOGGLE_SIDEBAR] (state) {
    state.sidebarOpen = !state.sidebarOpen
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}