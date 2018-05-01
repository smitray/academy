<template>
  <section class="container container--wr container--ovh container--full pageBanner">
    <div class="pageBanner__dialogue">
      <div class="pageBanner__dialogue--wr">
        <p class="pageBanner__dialogue--title"><slot></slot></p>
      </div>
    </div>
    <div class="pageBanner__image"><img src="~/assets/img/banner-4.jpeg" alt=""></div>
  </section>
</template>

<script>
  export default {

  };
</script>

<style lang="postcss" scoped>
  .pageBanner {
    h: 350px;

    &__dialogue, &__image {
      float: left;
      m: 0;
      h: 100%;
    }

    &__dialogue {
      w: 35%;
      position: relative;
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
        bg: url(~/assets/img/pg-banner.svg) no-repeat;
        position: absolute 0 -25% * *;
        background-size: 100% 100%;
        w: 123px;
        h: 100%;
      }

      &--wr {
        m: 5rem * * 14rem;
        c: #FFF;
        overflow: hidden;
      }

      &--title {
        fz: 5rem;
        fw: 700;
        mb: 3rem;
      }
    }

    &__image {
      w: 65%;
      img {
        w: 100%;
        h: auto;
      }
    }
  }
</style>
