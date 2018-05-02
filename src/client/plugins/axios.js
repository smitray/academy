import jsCookie from 'cookie';

export default ({ $axios, store, req }) => {
  let token;
  if (process.server) {
    const cookie = jsCookie.parse(req.headers.cookie);
    token = cookie.token; //eslint-disable-line
  } else {
    token = store.state.user.token; //eslint-disable-line
  }

  $axios.interceptors.request.use((request) => {
    if (token) {
      request.headers.common.Authorization = token;
    }
    return request;
  });
};
