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
          <p>Author: </p>
        </div>
        <div class="course__info--3x">
          <p>Published on: </p>
        </div>
        <div class="course__info--3x">
          <p>Enrolled: </p>
        </div>
      </div>
      <div class="container container--full container--wr container--rel container--ovh course__block">
        <div class="course__block--left">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore maxime, tempore, voluptate corporis nostrum, inventore veniam fuga perspiciatis nulla aperiam unde, sequi tenetur ipsa reiciendis modi eos optio eum quam sapiente asperiores. Neque corporis iure aut eos eius. Suscipit ad ratione ex quos sunt, quae perferendis, reprehenderit quidem voluptates qui.</p>
          <p>Quam rerum similique alias ex nobis ipsum enim quos cum commodi placeat dolores consectetur quo earum dolorum asperiores hic quis repudiandae impedit, repellat architecto et. Odio recusandae non molestiae? Accusamus et totam cumque, architecto, labore praesentium ratione nisi, accusantium deserunt impedit necessitatibus culpa quae excepturi rerum delectus laboriosam ipsum dolores.</p>
        </div>
        <div class="course__block--right">
          <p>$55</p>
          <a href="" class="btn-primary">Enroll now</a>
          <ul>
            <li>Includes</li>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
            <li>Item 6</li>
          </ul>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
  import PageBanner from '~/components/pageBanner.vue';

  export default {
    components: {
      PageBanner
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
