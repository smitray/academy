<template>
  <section class="container container--full container--wr container--rel container--ovh addCourse">
    <!-- Page banner -->
    <page-banner>
      Add</br>
      Test
    </page-banner>
    <!-- Page banner end -->
    <div class="container container--wr container--ovh container--rel container--block__ct addCourse--wr">
      <router-link :to="{ name: 'auth' }"><i class="icon-"></i>Back to dashboard</router-link>
      <form action="">
        <input type="text" placeholder="Question" v-model="test.title">
        <select v-model="test.course">
          <option value="placeholder" disabled>Choose course</option>
          <option v-for="course in courses" v-bind:value="course._id">
            {{ course.title }}
          </option>
        </select>
        <div class="test__ans--list" v-if="test.questions">
          <ul>
            <li v-for="qns in test.questions">
              {{ qns.question }}
              <ul v-if="qns.answers">
                <li v-for="ans in qns.answers" :class="{ correct: ans.correct }">{{ ans.answer }}</li>
              </ul>
            </li>
          </ul>
        </div>
        <input type="text" placeholder="Question" v-model="testQuestion" v-on:blur="updateQuestion" v-if="showQuestionInput">
        <div class="test__ans--set">
          <label for="correct"><input type="checkbox" name="correct" v-model="testAnswerRight">Correct answer</label>
          <input type="text" placeholder="Answer" v-model="testAnswer">
        </div>
        <div class="test__btn--wr">
          <a href="#" @click.prevent="addAnswer">Add Answer</a>
          <a href="#" @click.prevent="addQuestion">Add Question</a>
        </div>
      </form>
      <a href="#" class="btn-primary" @click.prevent="postTest">Pay & Publish</a>
    </div>
  </section>
</template>

<script>
  import { generate } from 'shortid';
  import _ from 'lodash';
  import PageBanner from '~/components/pageBanner.vue';

  export default {
    components: {
      PageBanner
    },
    middleware: 'auth',
    data: () => ({
      course: 'placeholder',
      courses: {},
      testAnswer: '',
      testAnswerRight: false,
      testQuestion: '',
      showQuestionInput: true,
      currentMark: null,
      test: {
        title: '',
        course: 'placeholder',
        questions: []
      }
    }),
    mounted() {
      this.myCourses();
    },
    async asyncData({ app }) {
      const { data } = await app.$axios.$get('/api/user/course/author');
      const courses = data.course.authorCourse;
      return { courses };
    },
    methods: {
      updateQuestion() {
        const id = generate();
        this.test.questions.push({
          _mark: id,
          question: this.testQuestion,
          answers: []
        });
        this.currentMark = id;
        this.showQuestionInput = false;
        this.testQuestion = '';
      },
      addAnswer() {
        const record = _.find(this.test.questions, {
          _mark: this.currentMark
        });
        record.answers.push({
          answer: this.testAnswer,
          correct: this.testAnswerRight
        });
        this.testAnswer = '';
        this.testAnswerRight = false;
      },
      addQuestion() {
        this.currentMark = '';
        this.showQuestionInput = true;
      },
      async postTest() {
        try {
          await this.$axios.$post('/api/course/test', this.test);
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
  .addCourse {
    bg: #F5F6FA;

    &__addLecture--form, &__addLecture--list, &__addContent--form {
      w: 100%;
      overflow: hidden;
    }

    &--wr {
      m: 4rem *;

      form {
        overflow: hidden;
        p: * 1rem;

        input[type="text"], textarea, select, a {
          w: 100%;
          display: block;
          bg: #FDFDFE;
          p: 2rem;
          c: #757575;
          border: none;
          m: 1.6rem *;
          -webkit-box-shadow: 1px 1px 1px 2px rgba(242,242,242,1);
          -moz-box-shadow: 1px 1px 1px 2px rgba(242,242,242,1);
          box-shadow: 1px 1px 1px 2px rgba(242,242,242,1);

          &:focus {
            outline: none;
          }
        }

        a {
          text-decoration: none;
          text-align: center;
          display: inline-block;
          w: 49%;
          m: * 1%;

          &:first-child {
            ml: 0;
          }

          &:last-child {
            mr: 0;
          }

          &:hover {
            c: map(colors, primary);
          }
        }
      }
    }

    &__addContent--form {
      w: 100%;
      bg: #FDFDFE;
      p: 2rem;
      m: 1.6rem *;
      -webkit-box-shadow: 1px 1px 1px 2px rgba(242,242,242,1);
      -moz-box-shadow: 1px 1px 1px 2px rgba(242,242,242,1);
      box-shadow: 1px 1px 1px 2px rgba(242,242,242,1);

      a {
        display: inline-block !important;
        w: 30% !important;

        &:nth-child(2) {
          m: * 5%;
        }
      }
    }
  }

  .test__ans--set {
    w: 100%;
    bg: #FDFDFE;
    p: 2rem;
    c: #757575;
    m: 1.6rem *;
    -webkit-box-shadow: 1px 1px 1px 2px rgba(242,242,242,1);
    -moz-box-shadow: 1px 1px 1px 2px rgba(242,242,242,1);
    box-shadow: 1px 1px 1px 2px rgba(242,242,242,1);

    label {
      p: 1.6rem *;
      display: block;
    }

    input[type="checkbox"] {
      mr: 0.6rem;
    }
  }

  .btn-primary {
    float: right;
    m: 1rem;
  }
</style>
