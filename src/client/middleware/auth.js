export default function ({ store, error }) {
  if (!store.state.user.isAuthenticated) {
    error({
      message: 'You are not authorised',
      statusCode: 403
    });
  }
}
