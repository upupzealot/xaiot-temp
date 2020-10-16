import Vue from 'vue';
import Vuex from 'vuex';

import API from '@/components-shared/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jwt: '',
    user: {},
  },
  mutations: {
    setJwt(state, jwt) {
      state.jwt = jwt;
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    login(ctx, { jwt, user }) {
      ctx.commit('setJwt', jwt);
      ctx.commit('setUser', {
        id: 1,
        avatar: '',
        ...user,
      });
      API.setJwt(jwt);
    },
    logout(ctx) {
      ctx.commit('setJwt', '');
      ctx.commit('setUser', {});
      API.setJwt('');
    },
  },
  modules: {
  },
});
