
// export const getters = {
//
// };

export const mutations = {
  SET_AMOUNT: (state, amount) => {
    state.amount = amount;
  },
  SET_COURSEID: (state, id) => {
    state.courseId = id;
  },
  SET_BTNCAP: (state, cap) => {
    state.btnCap = cap;
  }
};

export const actions = {

};

export const state = () => ({
  amount: 20,
  courseId: null,
  btnCap: 'Pay & Publish'
});
