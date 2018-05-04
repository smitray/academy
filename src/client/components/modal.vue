<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <a href="#" class="modal__close--btn" @click.prevent="closeModal"><i class="icon-cancel"></i></a>
          <div class="modal__signup" v-if="signup">
            <h3>Start learning</h3>
            <form @submit.prevent="authorize">
              <input type="text" placeholder="Your name" v-model="name" required>
              <input type="text" placeholder="Your username" v-model="username" required>
              <input type="email" v-model="email" placeholder="Your email" required>
              <input type="password" v-model="password" placeholder="Your password" required>
              <input type="password" name="confirm_pass" placeholder="Confirm password">
              <input type="hidden" v-model="signup" value="true">
              <input type="submit" value="Signup" class="btn-primary">
            </form>
          </div>
          <div class="modal__login" v-else-if="!signup">
            <h3>Login to your account</h3>
            <form @submit.prevent="authorize">
              <input type="text" name v-model="username" placeholder="Your email or username" required>
              <input type="password" v-model="password" placeholder="Your password" required>
              <a href="#" @click.prevent="noAccount">Don't have an account?</a>
              <input type="submit" value="Login" class="btn-primary">
            </form>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    data: () => ({
      name: '',
      username: '',
      email: '',
      password: ''
    }),
    props: {
      signup: {
        default: false
      }
    },
    methods: {
      noAccount() {
        this.$store.commit('loginToggle');
        this.$store.commit('signupToggle');
      },
      async authorize() {
        const user = await this.$axios.$post('/api/auth/local', {
          name: this.name,
          username: this.username,
          email: this.email,
          password: this.password,
          signup: this.signup
        });
        if (user.success) {
          await this.$store.commit('user/SET_TOKEN', user.data.token);
          await this.$store.dispatch('user/userDetails');
          if (!this.$store.state.user.coursePage) {
            let path = 'auth';
            if (user.data.acc_type === 'admin') {
              path = 'admin'
            }
            this.$router.push({
              name: path
            });
          }
          if (this.signup) {
            this.$store.commit('signupToggle');
          } else {
            this.$store.commit('loginToggle');
          }
        }
      },
      closeModal() {
        if (this.signup) {
          this.$store.commit('signupToggle');
        } else {
          this.$store.commit('loginToggle');
        }
      }
    }
  };
</script>

<style lang="postcss" scoped>
  .modal__login,.modal__signup {
    c: #FFF;

    form {
      overflow: hidden;

      input[type="email"], input[type="text"], input[type="password"] {
        border: none;
        padding: 1rem 1.6rem;
        background: #f1f1f1;
        w: 100%;
        m: 1rem *;

        &:focus {
          outline: none;
        }
      }

      input[type="submit"] {
        border: none;
        float: right;
        m: 1rem .6rem;
        cursor: pointer;
      }
    }
  }
</style>
