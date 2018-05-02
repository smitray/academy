
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
    const { cookie } = req.headers;
    if (cookie) {
      const token = cookie.replace('token=', '');
      commit('user/SET_TOKEN', token);
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
