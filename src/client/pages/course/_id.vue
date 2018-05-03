<template>
  <section class="container container--full container--wr container--rel container--ovh course">
    <!-- Page banner -->
    <page-banner>
      {{ data.course.title }}
    </page-banner>
    <!-- Page banner end -->
    <section class="container container--block container--wr container--rel container--ovh">
      <div class="container container--full container--wr container--rel container--ovh course__info">
        <div class="course__info--3x">
          <p>Author: {{ data.course.author.name }}</p>
        </div>
        <div class="course__info--3x">
          <p>Category: {{ data.course.category | fineTune }}</p>
        </div>
        <div class="course__info--3x">
          <p>Enrolled: {{ data.course.students ? data.course.students.length : 0 }}</p>
        </div>
      </div>
      <div class="container container--full container--wr container--rel container--ovh course__block">
        <div class="course__block--left" v-html="data.course.description">

        </div>
        <div class="course__block--right">
          <p>{{ data.course.price }} GBP</p>
          <a href="#" class="btn-primary" @click.prevent="enrollMe" >Enroll now</a>
          
          <ul>
            <li>Includes</li>
            <li v-for="lecture in data.course.lecture" v-if="data.course.lecture">{{ lecture.title }}</li>
            <li v-else>There are no sub items</li>
          </ul>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'; //eslint-disable-line
  import PageBanner from '~/components/pageBanner.vue';

  export default {
    async asyncData({ app, route }) {
      const { data } = await app.$axios.$get(`/api/course/${route.params.id}`);
      return { data };
    },
    components: {
      PageBanner
    },
    filters: {
      fineTune: string => string.replace(/-/g, ' ')
    },
    computed: {
      ...mapGetters('user', [
        'isAuthenticated'
      ])
    },
    methods: {
      async enrollMe() {
        try {
          await this.$axios.$post('/api/course/enroll', {
            crId: this.data.course._id
          });
          this.$router.push({
            name: 'auth'
          });
        } catch (e) {
          console.log(e);
        }
      }
    }
  };
</script>

<style lang="postcss" scoped>
  .course {
    bg: #F5F6FA;

    &__info {
      m: 1rem *;

      &--3x {
        float: left;
        m: * 0.8%;
        w: 32.26%;

        &:first-child {
          ml: 0;
        }

        &:last-child {
          mr: 0;
        }

        P {
          c: #747176;
          text-transform: capitalize;
        }
      }
    }

    &__block {
      m: 1rem * 6rem;

      &--left, &--right {
        float: left;
        overflow: hidden;
        m: 0 0.8%;
      }

      &--left {
        width: 66.13%;
        ml: 0;

        p {
          c: #747176;
        }
      }

      &--right {
        width: 32.26%;
        mr: 0;
        p: * 1rem;

        p {
          c: map(colors, primary);
          fz: 5rem;
          m: 1rem 0;
        }

        a {
          m: 1rem *;
        }

        ul {
          margin: 0;
          padding: 0;
          list-style: none;

          li {
            m: 0.8rem;
            c: #747176;
            pl: 1.8rem;
            fz: 2rem;

            &:first-child {
              pl: 0;

              &:before {
                content: '';
                mr: 0;
              }
            }

            &:before {
              content: '-';
              mr: .5rem;
            }
          }
        }
      }
    }
  }
</style>
