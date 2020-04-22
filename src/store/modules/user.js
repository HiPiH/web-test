const state = {

  userName: localStorage.getItem('userName') || '',
  token: localStorage.getItem('token') || ''

}

const getters = {
    isAuth: state => {
      return state.userName!="";
    },

    userName: state => {
        return state.userName
    }
}

const actions = {
    login({ commit }, login ) {
      commit('login', login);
    },
    logout({ commit },  ) {
      commit('logout');
    }
}


const mutations = {

    login (state, login) {
        localStorage.setItem('userName',login);
        state.userName = login;
    },

    logout (state) {
        localStorage.removeItem('userName');
        state.userName = "";
    }
}

export default {

  namespaced: true,
  state,
  getters,
  actions,
  mutations

}