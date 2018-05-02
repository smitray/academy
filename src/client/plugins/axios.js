export default ({ $axios, store }) => {
  if (process.server) {
    return;
  }

  $axios.interceptors.request.use((request) => {
    const { token } = store.state.user;
    if (token) {
      request.headers.common.Authorization = token;
    }
    return request;
  });
};
