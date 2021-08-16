/**
 * @Description: 
 * @Author: Libra
 * @GitHub: https://github.com/Libra-Lei
 * @Date: 2021-08-16 12:15:04
 * @LastEditors: Libra
 * @LastEditTime: 2021-08-16 12:21:33
 */

const state = {
  title: '你好，这里是微应用哦！'
}

const mutations = {
  UPDATE_TITLE(state, paylod) {
    state.title = paylod;
  }
}

const actions = {
  updateTitle: ({ commit }, payload) => {
    commit('UPDATE_TITLE', payload);
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
