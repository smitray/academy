<template>
  <section class="container container--full container--wr container--rel container--ovh dashboard">
    <!-- Page banner -->
    <page-banner>
      Hello</br>
      {{ welcomeUser }}
    </page-banner>
    <!-- Page banner end -->
    <div class="container container--wr container--ovh container--rel container--block__ct dashboard--ct">
      <div class="dashboard__instructor" v-if="isInstructor">
        <a href="#" @click.prevent="$store.commit('newToggle')" class="btn-primary">Add new</a>
        <table>
          <thead>
            <tr>
              <th>Course name</th>
              <th>Published on</th>
              <th>Category</th>
              <th>Price</th>
              <th>Enrolled</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="course in courses.authorCourse">
              <td>{{ course.title }}</td>
              <td>{{ new Date(course.createdAt).toDateString() }}</td>
              <td>{{ course.category }}</td>
              <td>{{ course.price }}</td>
              <td>{{ course.students ? course.students.length : 0 }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="dashboard__student" v-if="!isInstructor">
        <table>
          <thead>
            <tr>
              <th>Course name</th>
              <th>Enroll date</th>
              <th>test</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="course in courses.studentCourse">
              <td><router-link :to="{ name: 'course-id', params: { id: course._id } }">{{ course.title }}</router-link></td>
              <td>{{ new Date(course.createdAt).toDateString() }}</td>
              <td><a href="#" @click.prevent="takeTest(course.courseTest._id)" v-if="course.courseTest">{{ course.courseTest.title }}</a><span v-else>There aren't any test at the moment</span></td>
              <td><a href="#" @click.prevent="deleteCourse(course._id)">Delete Course</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'; //eslint-disable-line
  // import _ from 'lodash';

  import PageBanner from '~/components/pageBanner.vue';

  export default {
    data: () => ({
      courses: []
    }),
    middleware: 'auth',
    components: {
      PageBanner
    },
    computed: {
      ...mapGetters('user', [
        'welcomeUser',
        'isInstructor'
      ])
    },
    mounted() {
      this.myCourses();
    },
    methods: {
      async myCourses() {
        try {
          let url;
          if (this.isInstructor) {
            url = '/api/user/course/author';
          } else {
            url = '/api/user/course/student';
          }
          const { data } = await this.$axios.$get(url);
          this.courses = data.course;
        } catch (e) {
          console.log(e);
        }
      },
      takeTest(id) {
        this.$store.commit('payment/SET_COURSEID', id);
        this.$store.commit('payment/SET_AMOUNT', 10);
        this.$store.commit('payment/SET_BTNCAP', 'Pay & Attend test');
        this.$store.commit('paymentToggle');
      },
      async deleteCourse(crId) {
        try {
          await this.$axios.$post('/api/course/enroll/remove', {
            crId
          });
          this.courses.studentCourse
            .splice(this.courses.studentCourse.findIndex(obj => obj._id === crId), 1);
          this.$store.commit('user/REMOVE_COURSE', crId);
        } catch (e) {
          console.log(e);
        }
      }
    }
  };
</script>


<style lang="postcss" scoped>
  .dashboard {
    bg: #F5F6FA;

    &--ct {
      m: 8rem *;
    }

    &__instructor, &__student {
      overflow: hidden;

      table {
        w: 100%;
        border-collapse: collapse;

        thead {
          tr {
            th {
              c: map(colors, primary);
              text-transform: capitalize;
              fw: normal;
              fz: 2.8rem;
              p: .8rem *;
            }
          }
        }

        tbody {
          tr {
            bg: #FFF;

            td {
              border: 2px solid #E5E9F2;
              padding: 1rem;
              text-align: center;
              c: #757575;

              a {
                c: map(colors, primary);
                text-decoration: none;

                &:nth-child(2) {
                  ml: 1rem;
                }
              }

              &:first-child {
                text-align: left;
              }
            }
          }
        }
      }
    }

    &__instructor {
      a {
        float: right;
        m: 1rem 1rem 3rem;
      }
    }
  }
</style>
