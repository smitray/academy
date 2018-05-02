import jsCookie from 'cookie';
// export const getters = {
//
// };

export const mutations = {
  loginToggle(state) {
    state.showLogin = !state.showLogin;
  },
  signupToggle(state) {
    state.showSignup = !state.showSignup;
  },
  newToggle(state) {
    state.addNewModal = !state.addNewModal;
  },
  paymentToggle(state) {
    state.paymentModal = !state.paymentModal;
  }
};

export const actions = {
  async nuxtServerInit({ dispatch, commit }, { req }) {
    const cookie = jsCookie.parse(req.headers.cookie);
    if (cookie.token) {
      commit('user/SET_TOKEN', cookie.token);
      await dispatch('user/userDetails');
    }
  }
};

export const state = () => ({
  showLogin: false,
  showSignup: false,
  addNewModal: false,
  paymentModal: false
});
