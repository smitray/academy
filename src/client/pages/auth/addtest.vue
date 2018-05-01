<template>
  <section class="container container--full container--wr container--rel container--ovh addCourse">
    <!-- Page banner -->
    <page-banner>
      Add</br>
      Test
    </page-banner>
    <!-- Page banner end -->
    <div class="container container--wr container--ovh container--rel container--block__ct addCourse--wr">
      <form action="">
        <input type="text" placeholder="Titel of the test" v-model="testTitle">
        <select v-model="course">
          <option value="placeholder" disabled>Choose course</option>
          <option v-for="option in options" v-bind:value="option.value">
            {{ option.text }}
          </option>
        </select>
        <input type="text" placeholder="Answer" v-model="testTitle">
        <a href="#">Add Answer</a>

      </form>
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
      course: 'placeholder',
      options: [{
        text: 'Learning C++',
        value: 'laerning_c'
      }, {
        text: 'Visual Studio',
        value: 'v_s'
      }, {
        text: 'Python',
        value: 'python'
      }]
    })
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
</style>
