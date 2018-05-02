<template>
  <section class="about container container--wr container--ovh container--relc contiainer--full">
    <!-- Page banner -->
    <page-banner>
      About</br>
      Us
    </page-banner>
    <!-- Page banner end -->
    <section class="about__badge container container--wr container--ovh container--relc contiainer--full">
      <div class="about__badge--3x"><a href="#" class="active"><i class="icon-book-open"></i>industrial courses</a></div>
      <div class="about__badge--3x"><a href="#"><i class="icon-bank"></i>Learning management</a></div>
      <div class="about__badge--3x"><a href="#"><i class="icon-star"></i>online certification</a></div>
    </section>
    <section class="about__content container container--wr container--ovh container--relc container--block">
      <div class="about__content--2x">
        <h2>Who we are</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit amet quas perferendis quaerat labore, iusto mollitia asperiores ex, quidem magnam temporibus rem distinctio quis modi nesciunt aperiam corrupti repudiandae voluptas.</p>
        <p>Inventore, consequatur, accusamus. Amet eaque eveniet quo numquam asperiores enim, laboriosam iure nemo explicabo laudantium voluptatem autem eius, velit atque placeat aliquid totam iusto dolorum eum aut. Architecto, aspernatur, ea.</p>
        <p>Sint tempora reprehenderit doloribus, maxime non explicabo expedita corporis dignissimos est odit asperiores quae optio deleniti quibusdam quisquam a sequi soluta animi voluptatem temporibus laudantium. Quo illo hic rerum iure?</p>
      </div>
      <div class="about__content--2x"><img src="http://via.placeholder.com/550x400" alt=""></div>
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
  .about {
    bg: #F5F6FA;

    &__badge {
      display: none;

      &--3x {
        float: left;
        width: 33.33%;

        &:nth-child(2) {
          a {
            bdr: 1px solid map(colors, secondary);
            bdl: 1px solid map(colors, secondary);
          }
        }

        a {
          text-decoration: none;
          display: block;
          c: #FFF map(colors, primary);
          text-align: center;
          p: 3rem *;
          fz: 3rem;

          [class^="icon-"], [class*=" icon-"] {
            mr: 8px;
          }

          &.active {
            c: map(colors, primary) #FFF;
          }
        }
      }
    }

    &__content {
      m: 6rem *;

      &--2x {
        w: 49.2%;
        float: left;
        m: * 0.8%;

        h2 {
          c: map(colors, primary);
          fz: 5rem;
          fw: normal;
          text-transform: capitalize;
          mt: 0;
        }

        img {
          w: 100%;
          h: auto;
          mt: 2rem;
        }

        p {
          c: #757575;
        }

        &:first-child {
          ml: 0;
        }

        &:last-child {
          mr: 0;
        }
      }
    }
  }
</style>
