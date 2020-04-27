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
    login({ commit }, user) {
      console.log(user);
     if(user.password == "123456")
        {
            commit('login', user.login);
            return true;
        } return false;
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