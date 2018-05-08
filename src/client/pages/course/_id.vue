<template>
  <section class="container container--full container--wr container--rel container--ovh course">
    <!-- Page banner -->
    <page-banner>
      Courses
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
        <div :class="[shouldEnroll ? 'container container--full container--wr container--rel container--ovh' : 'course__block--left']">
          <h2 class="course__title">{{ data.course.title }}</h2>
          <div class="course__block--description" v-html="data.course.description"></div>
          <div class="course__block--listItem">
            <ul>
              <li>Includes</li>
              <li v-for="lecture in data.course.lecture" v-if="data.course.lecture">{{ lecture.title }}
                <ul v-if="lecture.content">
                  <li v-for="content in lecture.content">{{ content.title }}<a v-if="shouldEnroll" :href="content.file.permalink" :download="content.file.filename">Download {{ content.ctType }}</a></li>
                </ul>
              </li>
              <li v-else>There are no sub items</li>
            </ul>
          </div>
        </div>
        <div class="course__block--right" v-if="!shouldEnroll">
          <p>{{ data.course.price }} GBP</p>
          <a href="#" class="btn-primary" @click.prevent="enrollMe">Enroll now</a>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
  import _ from 'lodash';
  import { mapGetters } from 'vuex'; //eslint-disable-line
  import PageBanner from '~/components/pageBanner.vue';

  export default {
    data: () => ({
      shouldEnroll: false
    }),
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
    mounted() {
      this.checkEnroll();
    },
    methods: {
      async enrollMe() {
        if (!this.isAuthenticated) {
          this.$store.commit('user/SET_PAGE');
          this.$store.commit('loginToggle');
        } else {
          try {
            this.$store.commit('user/ADD_COURSE', this.data.course._id);
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
      },
      checkEnroll() {
        if (this.$store.state.user.user) {
          this.shouldEnroll = _.includes(this.$store.state.user.user.studentCourse, this.$route.params.id); // eslint-disable-line
        }
      }
    }
  };
</script>

<style lang="postcss" scoped>
  .course {
    bg: #F5F6FA;

    &__title {
      c: map(colors, primary);
    }

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

      &--description {
        w: 100%;
        overflow: hidden;
      }

      &--listItem {
        p: 1rem;
        m: 1rem *;

        ul {
          margin: 0;
          padding: 1.8rem;
          list-style: none;
          overflow: hidden;
          bg: #FFF;
          border-radius: 5px;
          -webkit-box-shadow: 1px 1px 2px 1px rgba(235,235,235,1);
          -moz-box-shadow: 1px 1px 2px 1px rgba(235,235,235,1);
          box-shadow: 1px 1px 2px 1px rgba(235,235,235,1);

          li {
            m: 0.8rem *;
            c: #747176;
            pl: 1.8rem;
            fz: 2.5rem;

            ul {
              bg: none;
              box-shadow: none;
              border-radius: none;
              p: 0;

              li {
                fz: 2rem;
                m: 1.2rem *;
                c: #747176;
                pl: 1.8rem;

                a {
                  display: inline-block;
                  c: #FFF map(colors, secondary);
                  border-radius: 2px;
                  padding: .7rem 1rem;
                  text-decoration: none;
                  ml: 1rem;
                  fz: 1.6rem;
                }

                &:before {
                  content: '--';
                  mr: .5rem;
                }

                &:first-child {
                  c: #747176;
                  pl: 1.8rem;

                  &:before {
                    content: '--';
                    mr: .5rem;
                  }
                }
              }
            }

            &:first-child {
              pl: 0;
              c: map(colors, primary);

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

      }
    }
  }
</style>
