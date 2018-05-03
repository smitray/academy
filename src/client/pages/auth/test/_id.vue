<template>
  <section class="container container--full container--wr container--rel container--ovh addCourse">
    <!-- Page banner -->
    <page-banner>
      Take</br>
      Test
    </page-banner>
    <!-- Page banner end -->
    <div class="container container--wr container--ovh container--rel container--block__ct addCourse--wr">
      <h3>{{ questions.title }}</h3>
      <div class="test__result">
        <p><span>Correct answers: {{ correct }}</span><span>Wrong answers: {{ wrong }}</span></p>
      </div>
      <div class="test__block--wr container--ovh">
        <div class="test__block" v-for="(qnsbl, index) in questions.questions">
          <p>{{ qnsbl.question }}</p>
          <label for="ans" v-for="ans in qnsbl.answers"><input type="radio" :name="index" :value="ans.correct" @click="scoreBuild(ans.correct, index)" :disabled="disabled[index]">{{ ans.answer }}</label>
        </div>
      </div>
      <div class="test__submit--wr"><a href="#" class="btn-primary">Submit test</a></div>
    </div>
  </section>
</template>

<script>
  import PageBanner from '~/components/pageBanner.vue';

  export default {
    components: {
      PageBanner
    },
    data: () => ({
      questions: {},
      correct: 0,
      wrong: 0,
      disabled: {}
    }),
    mounted() {
      this.questionFetch();
    },
    methods: {
      async questionFetch() {
        try {
          const { data } = await this.$axios.$get(`/api/course/test/${this.$route.params.id}`);
          this.questions = data.test;
        } catch (e) {
          console.log(e);
        }
      },
      scoreBuild(ans, point) {
        if (ans === 'true') {
          this.correct += 1;
        } else {
          this.wrong += 1;
        }
        this.disabled[point] = true;
      }
    }
  };
</script>

<style lang="postcss" scoped>
.addCourse {
  bg: #F5F6FA;

  &--wr {
    m: 4rem *;
    bg: #FFF;
    p: 2rem 2rem 4rem;
    overflow: hidden;

    h3 {
      text-align: center;
      c: map(colors, primary);
      text-transform: capitalize;
      border-bottom: 1px solid #F5F6FA;
      pb: 4rem;
    }

    .test__result {
      p {
        c: #757575;

        span {
          &:first-child {
            c: green;
          }

          &:last-child {
            c: red;
            float: right;
          }
        }
      }
    }

    .test__block {
      w: 100%;
      float: left;

      p {
        fz: 2.5rem;
      }

      label {
        w: 25%;
        float: left;
        display: block;
        c: #757575;

        input[type="radio"] {
          mr: 0.7rem;
        }
      }
    }

    .test__submit--wr {
      m: 2rem *;
      overflow: hidden;
      w: 100%;

      a {
        float: right;
        m: 1rem;
      }
    }
  }
}
</style>
