<template>
  <header class="header container container--full container--wr container--ovh">
    <div class="container container--block container--wr container--ovh container--rel">
      <div class="header__logo">
        <router-link :to="{ name: 'index' }">
          academy
        </router-link>
      </div>
      <div class="header__navigation">
        <ul>
          <li><router-link :to="{ name: 'index' }">Home</router-link></li>
          <li><router-link :to="{ name: 'about' }">About Us</router-link></li>
          <li><router-link :to="{ name: 'course' }">Courses</router-link></li>
          <li><router-link :to="{ name: 'contact' }">Contact Us</router-link></li>
          <li class="login" v-if="!isAuth">
            <a href="#" @click.prevent="$store.commit('loginToggle')">login</a>
          </li>
          <li v-else>
            <a href="#" @click.prevent="$store.dispatch('user/logout')">logout</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
  import { mapGetters } from 'vuex'; //eslint-disable-line

  export default {
    computed: {
      ...mapGetters({
        isAuth: 'user/isAuthenticated'
      })
    }
  };
</script>

<style lang="postcss" scoped>
  .header {
    position: absolute 0 0 * *;
    z-index: 99;

    &__logo {
      w: 30%;
      float: left;

      a {
        display: block;
        ff: 'Kaushan Script', cursive;
        fz: 4rem;
        c: #FFF;
        text-decoration: none;

        &:hover {
          c: map(colors, secondary);
        }

        &:hover, &:focus {
          outline: none;
        }
      }
    }

    &__navigation {
      w: 55%;
      float: right;
      mt: 1rem;

      ul {
        margin: 0;
        padding: 0;
        list-style: none;
        overflow: hidden;
        float: right;

        li {
          float: left;

          &:first-child {
            a {
              pl: 0
            }
          }

          &.login {
            a {
              border: 1px solid map(colors, secondary);
              padding: .5rem 3.8rem;
              border-radius: 20px;
              mt: 0.4rem;

              &:hover {
                border-color: map(colors, primary);
              }
            }
          }

          a {
            text-decoration: none;
            color: map(colors, primary);
            p: 1rem 1.6rem;
            display: block;
            text-transform: capitalize;

            &:hover {
              c: map(colors, secondary);
            }
            &:hover, &:focus {
              outline: none;
            }
          }
        }
      }
    }
  }
</style>
