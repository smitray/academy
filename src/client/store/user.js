export const getters = {
  isInstructor: state => (state.user.acc_type === 'instructor'),
  isAuthenticated: state => (state.isAuthenticated),
  welcomeUser: (state) => {
    const firstName = state.user.name.split(' ');
    return firstName[0];
  }
};

export const mutations = {
  SET_USER: (state, user) => {
    state.user = user;
    state.isAuthenticated = true;
  },
  UNSET_USER: (state) => {
    state.user = {};
    state.isAuthenticated = false;
  }
};

export const actions = {
  async userDetails({ commit }, token) {
    try {
      this.$axios.setHeader('Authorization', token);
      const { data } = await this.$axios.$get('/api/user');
      commit('SET_USER', data.user);
    } catch (e) {
      if (e) {
        commit('UNSET_USER');
      }
    }
  },
  async logout({ commit }) {
    try {
      await this.$axios.$get('/api/user/logout');
      commit('UNSET_USER');
      this.$router.push({
        name: 'index'
      });
    } catch (e) {
      console.log(e);
    }
  }
};

export const state = () => ({
  user: {},
  isAuthenticated: false
});
