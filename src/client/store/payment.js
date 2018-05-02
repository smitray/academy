
// export const getters = {
//
// };

export const mutations = {
  SET_AMOUNT: (state, amount) => {
    state.amount = amount;
  },
  SET_COURSEID: (state, id) => {
    state.courseId = id;
  }
};

export const actions = {

};

export const state = () => ({
  amount: 10,
  courseId: null
});
