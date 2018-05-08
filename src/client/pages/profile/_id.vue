<template>
  <section class="container container--full container--wr container--rel container--ovh course">
    <!-- Page banner -->
    <page-banner>
      John</br>
      Doe
    </page-banner>
    <!-- Page banner end -->
    <section class="container container--block container--wr container--rel container--ovh">
      <div class="container container--full container--wr container--rel container--ovh course__block">
        <div class="course__block--left">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore tenetur consequuntur, totam dolor molestiae, esse id ducimus magni, corrupti dolore ad voluptatibus ipsa? Possimus praesentium earum magni, reprehenderit qui at vel, debitis eaque culpa. Sunt, repudiandae eveniet eaque corrupti voluptatem.</p>
          <p>Rem perferendis sed magnam veniam officia odio, odit. Id tempora ipsum dolorem iste necessitatibus quos, assumenda mollitia quod fugit itaque, voluptas explicabo. Commodi at placeat assumenda maiores corporis soluta delectus rerum quae, repudiandae facilis eligendi nostrum vero omnis iure, possimus.</p>
          <p>Minima reiciendis cupiditate commodi soluta praesentium, accusantium suscipit, numquam recusandae ad neque? Odio doloribus at alias aliquam, voluptas officia provident, consequuntur quia ullam velit itaque rerum sapiente doloremque dignissimos delectus ducimus temporibus. Molestias neque, dolorum iste perspiciatis dicta at modi.</p>
          <p>Minus autem suscipit distinctio perferendis dolore est facere voluptas soluta. Molestiae obcaecati quia quod blanditiis. Accusantium nostrum maxime voluptatum adipisci tempore necessitatibus fuga. Architecto amet, optio voluptatibus magnam quisquam harum voluptatem nesciunt in, illo corrupti molestiae deleniti alias, maxime ipsam!</p>
        </div>
        <div class="course__block--right">
          <img src="/public/mock-trainer-1.jpg" alt="">
          <ul>
            <li>Courses published by me:</li>
            <li>An awesome course</li>
            <li>An awesome course</li>
            <li>An awesome course</li>
            <li>An awesome course</li>
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

        img {
          display: block;
          w: 100%;
          h: auto;
          mb: 3rem;
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
