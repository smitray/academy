<template>
  <section class="ind container container--full container--wr container--rel container--ovh">
    <!-- Index banner -->
    <section class="ind__banner container container--wr">
      <div class="ind__banner--dialogue">
        <div class="ind__banner--dialogue__wr">
          <p class="ind__banner--slogan">Keep pace</br>with change</p>
          <p class="ind__banner--desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolorem minima blanditiis velit modi possimus sit repudiandae voluptates, placeat nobis eaque quam officiis quasi iure consequuntur ut, harum sunt fugiat!</p>
          <a href="#" v-if="!isAuthenticated" class="btn-primary" @click.prevent="$store.commit('signupToggle')">Start learning</a>
          <router-link v-else :to="{ name: 'auth' }" class="btn-primary">Dashboard</router-link>
          <router-link :to="{ name: 'instructor' }" v-if="!isInstructor" class="btn-primary">Become an Instructor</router-link>
        </div>
      </div>
      <div class="ind__banner--image">
        <img src="/public/banner-1.png" alt="">
      </div>
    </section>
    <!-- Index banner end -->
    <!-- Intor Badge ind page -->
    <div class="ind__introBadge container container--block__ct container--wr container--ovh container--rel">
      <div class="ind__introBadge--3x">
        <i class="icon-book-open"></i>
        <p>industrial</br>courses</p>
      </div>
      <div class="ind__introBadge--3x">
        <i class="icon-bank"></i>
        <p>learning</br>management</p>
      </div>
      <div class="ind__introBadge--3x">
        <i class="icon-star"></i>
        <p>online</br>certification</p>
      </div>
    </div>
    <!-- Intor Badge ind page end -->
    <!-- Popular courses -->
    <!-- <my-courses/> -->
    <!-- Popular courses end -->
    <!-- About us block -->
    <div class="ind__about container container--rel container--full">
      <div class="container container--wr container--ovh container--rel container--block">
        <div class="ind__about--2x">
          <h2>About Us</h2>
          <img src="/public/tra-nguyen-459276-unsplash.jpg" alt="">
        </div>
        <div class="ind__about--2x">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex non doloribus, sed distinctio autem quas, quis, corrupti enim nostrum odit libero error?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis maxime distinctio nihil quam nesciunt cumque voluptates, sint, consequuntur eaque autem. Magnam dolores, nostrum repudiandae illum, nesciunt aut voluptatem officia totam quam vel ipsum, facilis non!</p>
          <router-link :to="{ name: 'about' }" class="btn-primary">Read more</router-link>
        </div>
      </div>
    </div>
    <!-- About us block end -->
    <!-- Index instructor -->
    <my-instructor/>
    <!-- Index instructor end -->
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'; //eslint-disable-line

  import MyCourses from '~/components/courses.vue';
  import MyInstructor from '~/components/instructor.vue';

  export default {
    components: {
      MyCourses,
      MyInstructor
    },
    computed: {
      ...mapGetters('user', [
        'isAuthenticated',
        'isInstructor'
      ])
    }
  };
</script>

<style lang="postcss" scoped>
  .ind {

    &__banner {
      h: 100vh;

      &--slogan {
        fz: 5rem;
        fw: 700;
        mb: 3rem;
      }

      &--desc {
        lh: 2.6rem;
        pr: 2rem;
      }

      &--dialogue, &--image {
        float: left;
        m: 0;
        h: 100%;
      }

      &--dialogue {
        w: 35%;
        position: relative;
        z-index: 5;
        background: rgba(114,43,194,1);
        background: -moz-linear-gradient(top, rgba(114,43,194,1) 0%, rgba(184,107,220,1) 100%);
        background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(114,43,194,1)), color-stop(100%, rgba(184,107,220,1)));
        background: -webkit-linear-gradient(top, rgba(114,43,194,1) 0%, rgba(184,107,220,1) 100%);
        background: -o-linear-gradient(top, rgba(114,43,194,1) 0%, rgba(184,107,220,1) 100%);
        background: -ms-linear-gradient(top, rgba(114,43,194,1) 0%, rgba(184,107,220,1) 100%);
        background: linear-gradient(to bottom, rgba(114,43,194,1) 0%, rgba(184,107,220,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#722bc2', endColorstr='#b86bdc', GradientType=0 );

        &:after {
          content: '';
          bg: url(~/assets/img/banner-bg.svg) no-repeat;
          position: absolute 0 -28% * *;
          background-size: 100% 100%;
          w: 200px;
          h: 100%;
          z-index: -1;
        }

        &__wr {
          m: 8rem * * 14rem;
          c: #FFF;
          overflow: hidden;

          a {
            m: 1.5rem .6rem;
          }
        }
      }

      &--image {
        w: 65%;
        img {
          w: 100%;
          h: 100%;
        }
      }
    }

    &__introBadge {
      m: 7rem * *;

      &--3x {
        float: left;
        m: 0 7%;
        w: 24%;
        h: 17.8rem;

        &:first-child {
          ml: 0;
        }

        &:last-child {
          mr: 0;
        }

        border: 12px solid #ffd8f1;
        border-radius: 50%;
        text-align: center;

        background: #ffa5de;
        background: -moz-linear-gradient(top, #ffa5de 0%, #b86bdc 100%);
        background: -webkit-linear-gradient(top, #ffa5de 0%,#b86bdc 100%);
        background: linear-gradient(to bottom, #ffa5de 0%,#b86bdc 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffa5de', endColorstr='#b86bdc',GradientType=0 );

        [class^="icon-"], [class*=" icon-"] {
          display: block;
          m: 1rem * 0.8rem;
          fz: 5rem;
          c: #FFF
        }

        p {
          c: map(colors, primary);
          text-transform: capitalize;
          mt: 0;
        }
      }
    }

    &__about {
      m: 12rem *;
      background: rgba(184,107,220,1);
      background: -moz-linear-gradient(left, rgba(184,107,220,1) 0%, rgba(114,43,194,1) 100%);
      background: -webkit-gradient(left top, right top, color-stop(0%, rgba(184,107,220,1)), color-stop(100%, rgba(114,43,194,1)));
      background: -webkit-linear-gradient(left, rgba(184,107,220,1) 0%, rgba(114,43,194,1) 100%);
      background: -o-linear-gradient(left, rgba(184,107,220,1) 0%, rgba(114,43,194,1) 100%);
      background: -ms-linear-gradient(left, rgba(184,107,220,1) 0%, rgba(114,43,194,1) 100%);
      background: linear-gradient(to right, rgba(184,107,220,1) 0%, rgba(114,43,194,1) 100%);
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b86bdc', endColorstr='#722bc2', GradientType=1 );
      p: 4rem *;

      &:before {
        content: '';
        bg: url(~/assets/img/banner-bg-top.svg) no-repeat;
        position: absolute -14% * * 0;
        background-size: 100% 100%;
        w: 100%;
        h: 80px;
      }

      &:after {
        content: '';
        bg: url(~/assets/img/banner-bg-bottom.svg) no-repeat;
        position: absolute * * -14% 0;
        background-size: 100% 100%;
        w: 100%;
        h: 80px;
      }

      &--2x {
        float: left;
        w: 48%;
        m: 0 2%;

        &:first-child {
          ml: 0;
        }

        &:last-child {
          mr: 0;
          mt: 8rem;
        }

        h2 {
          c: #FFF;
          text-align: right;
          fw: normal;
          mt: 0;
          fz: 4.5rem;
        }

        p {
          c: #FFF;
          lh: 3.5rem;

          &:first-child {
            mt: 0rem;
          }
        }

        img {
          display: block;
          w: 100%;
          h: auto;
        }
      }
    }
  }
</style>
