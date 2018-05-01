<template>
  <section class="container container--wr container--ovh container--relc contiainer--full instructor">
    <!-- Page banner -->
    <page-banner>
      Become</br>
      an Instructor
    </page-banner>
    <!-- Page banner end -->
    <section class="container container--wr container--ovh container--relc container--block instructor--wr">
      <div class="instructor--2x">
        <img src="http://via.placeholder.com/550x350" alt="">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, natus! Quibusdam eveniet praesentium odit debitis accusantium veritatis nisi natus quo sapiente accusamus porro, odio mollitia officia explicabo vitae repellendus culpa!</p>
        <p>Provident, error harum, nam omnis dolores totam asperiores alias veniam quasi soluta nisi nihil culpa cum quibusdam deleniti nobis laboriosam animi consectetur fugit quos. Tempora provident debitis officia quis rem!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam aperiam praesentium culpa quaerat facilis sequi accusamus obcaecati, ipsa eveniet ducimus possimus blanditiis tenetur rem mollitia tempora cupiditate enim corporis labore?</p>
      </div>
      <div class="instructor--2x">
        <div class="instructor__form--wr">
          <h3>Register to become an instructor</h3>
          <form @submit.prevent="authorize">
            <input type="text" placeholder="Your name" v-model="name">
            <input type="email" placeholder="Your email" v-model="email">
            <input type="text" placeholder="Your username" v-model="username">
            <input type="password" placeholder="Your password"  v-model="password">
            <input type="submit" value="Register" class="btn-primary">
          </form>
        </div>
      </div>
    </section>
    <my-courses/>
  </section>
</template>

<script>
  import MyCourses from '~/components/courses.vue';
  import PageBanner from '~/components/pageBanner.vue';

  export default {
    data: () => ({
      name: '',
      username: '',
      email: '',
      password: '',
      signup: true,
      accType: 'instructor'
    }),
    components: {
      MyCourses,
      PageBanner
    },
    methods: {
      async authorize() {
        const user = await this.$axios.$post('/api/auth/local', {
          name: this.name,
          username: this.username,
          email: this.email,
          password: this.password,
          signup: this.signup,
          accType: this.accType
        });
        if (user.success) {
          await this.$store.dispatch('user/userDetails', user.data.token);
          this.$router.push({
            name: 'auth'
          });
        }
      }
    }
  };
</script>

<style lang="postcss" scoped>
  .instructor {
    bg: #F5F6FA;

    &--wr {
      m: 4rem * 1rem;
    }

    &--2x {
      w: 49.2%;
      float: left;
      m: * 0.8%;

      img {
        w: 100%;
        h: auto;
      }

      p {
        c: #757575;
      }

      &:first-child {
        ml: 0;
      }

      &:last-child {
        mr: 0;
      }
    }

    &__form--wr {
      padding: 2rem 3rem;
      border-radius: 10px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
      transition: all .3s ease;
      background: rgba(114,43,194,1);
      background: -moz-linear-gradient(top, rgba(114,43,194,1) 0%, rgba(184,107,220,1) 100%);
      background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(114,43,194,1)), color-stop(100%, rgba(184,107,220,1)));
      background: -webkit-linear-gradient(top, rgba(114,43,194,1) 0%, rgba(184,107,220,1) 100%);
      background: -o-linear-gradient(top, rgba(114,43,194,1) 0%, rgba(184,107,220,1) 100%);
      background: -ms-linear-gradient(top, rgba(114,43,194,1) 0%, rgba(184,107,220,1) 100%);
      background: linear-gradient(to bottom, rgba(114,43,194,1) 0%, rgba(184,107,220,1) 100%);
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#722bc2', endColorstr='#b86bdc', GradientType=0 );

      h3 {
        c: #FFF;
      }

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
  }
</style>
