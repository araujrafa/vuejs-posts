import Vue from 'vue';
import Vuex from 'vuex';
import { ADD_POST } from './mutation-type';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [{
      title: 'New notice',
      text: 'Corinthians campeao paulista',
      time: '12:00hrs'
    }],
  },
  mutations: {
    [ADD_POST](state, payload) {
      state.posts.push(payload)
    }
  },
  actions: {
    addPost ({ commit }, post) {
      commit(ADD_POST, post);
    },
  }
});