<template>
  <section class="container container--wr container--ovh container--relc contiainer--full contact">
    <!-- Page banner -->
    <page-banner>
      Contact</br>
      Us
    </page-banner>
    <!-- Page banner end -->
    <section class="container container--wr container--ovh container--relc container--block">
      <div class="contact--wr">
        <div class="contact--2x">
          <p><i class="icon-phone"></i> +44 - 1234-567-789</p>
          <p><i class="icon-mail"></i> email@email.com</p>
          <p><i class="icon-location"></i> 24 Nottingham Rd</p>
        </div>
        <div class="contact--2x">
          <form action="#">
            <input type="text" placeholder="Your name">
            <input type="email" placeholder="Your email">
            <textarea name="" id="" cols="30" rows="10" placeholder="Your message"></textarea>
            <input type="submit" value="send" class="btn-primary">
          </form>
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
  .contact {
    bg: #F5F6FA;

    &--wr {
      m: 6rem *;
      overflow: hidden;
    }

    &--2x {
      w: 49.2%;
      float: left;
      m: * 0.8%;

      p {
        c: #757575;
        m: 5rem 0;

        [class^="icon-"], [class*=" icon-"] {
          c: map(colors, primary) #FFF;
          border-radius: 50%;
          padding: .8rem;
          margin-right: .8rem;
        }
      }

      form {
        overflow: hidden;
        p: * 1rem;

        input[type="text"], textarea, input[type="email"] {
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

        input[type="submit"] {
          float: right;
          border: none;
          mb: 1rem;
          cursor: pointer;
        }
      }

      &:first-child {
        ml: 0;
      }

      &:last-child {
        mr: 0;
      }
    }
  }
</style>
