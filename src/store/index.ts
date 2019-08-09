import { Session } from './../../../graphql-api/src/apollo/types/hello';
export const state = () => ({
  session: null
});

export const mutations = {
  setSession(state, { session }) {
    state.session = session;
    console.log('setting!', session);
  }
};

export const actions = {
  async add({ commit }) {
    const GRAPHQL_QUERY = `mutation {
      add
    }`;
    try {
      // @ts-ignore
      await this.$axios.post('/graphql', {
        query: GRAPHQL_QUERY
      });
    } catch (e) {
      console.error(`add error`, GRAPHQL_QUERY, e);
    }
  },
  async logout({ commit }) {
    const GRAPHQL_QUERY = `mutation {
      logout
    }`;
    try {
      // @ts-ignore
      const apiResult = await this.$axios.post('/graphql', {
        query: GRAPHQL_QUERY
      });
      commit('setSession', { session: null });
    } catch (e) {
      console.error(`logout error`, GRAPHQL_QUERY, e);
    }
  },
  async initSession({ commit, rootState }) {
    const GRAPHQL_QUERY = `{
      session {
        id
      }
    }`;

    try {
      // @ts-ignore
      const apiResult = await this.$axios.post('/graphql', {
        query: GRAPHQL_QUERY
      });
      commit('setSession', apiResult.data.data);
    } catch (e) {
      console.error(`nuxtServerInit error`, GRAPHQL_QUERY, e);
    }
  },
  async nuxtServerInit({ dispatch }) {
    return dispatch('initSession');
  }
};
