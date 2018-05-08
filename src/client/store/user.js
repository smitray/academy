export const getters = {
  isInstructor: (state) => {
    if (state.user) {
      if (state.user.acc_type === 'instructor') {
        return true;
      }
    }
    return false;
  },
  isAuthenticated: state => (state.isAuthenticated),
  welcomeUser: (state) => {
    if (state.user) {
      const firstName = state.user.name ? state.user.name.split(' ') : 'John Doe';
      return firstName[0];
    }
    return false;
  },
  myToken: state => state.token
};

export const mutations = {
  SET_USER: (state, user) => {
    state.user = user;
    state.isAuthenticated = true;
  },
  UNSET_USER: (state) => {
    state.user = {};
    state.isAuthenticated = false;
  },
  SET_PAGE: (state) => {
    state.coursePage = !state.coursePage;
  },
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  ADD_COURSE: (state, crId) => {
    state.user.studentCourse.push(crId);
  },
  REMOVE_COURSE: (state, crId) => {
    state.user.studentCourse.splice(state.user.studentCourse.findIndex(obj => obj._id === crId), 1);
  }
};

export const actions = {
  async userDetails({ commit, state }) {
    if (state.token) {
      this.$axios.setHeader('Authorization', state.token);
    }
    try {
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
  isAuthenticated: false,
  coursePage: false,
  token: null
});
