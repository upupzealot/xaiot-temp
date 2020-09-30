import Vue from 'vue';
import Vuex from 'vuex';

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
    },
    logout(ctx) {
      ctx.commit('setJwt', '');
      ctx.commit('setUser', {});
    },
  },
  modules: {
  },
});
