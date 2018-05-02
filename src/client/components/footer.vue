<template>
  <footer class="footer container container--full container--wr container--ovh container--rel">
    <div class="container container--wr container--ovh container--block container--rel">
      <div class="footer__loGO">
        <router-link :to="{ name: 'index' }">
          academy
        </router-link>
      </div>
      <div class="footer__naviGAtion">
        <nav class="footer__naviGAtion--listItems">
          <ul>
            <li><router-link :to="{ name: 'index' }">Home</router-link></li>
            <li><router-link :to="{ name: 'about' }">About Us</router-link></li>
            <li><router-link :to="{ name: 'course' }">Courses</router-link></li>
            <li><router-link :to="{ name: 'instructor' }">Become an instructor</router-link></li>
            <li><router-link :to="{ name: 'contact' }">Contact Us</router-link></li>
          </ul>
        </nav>
        <nav class="footer__naviGAtion--listItems">
          <ul>
            <li><router-link :to="{ name: 'index' }">Terms & Conditions</router-link></li>
            <li><router-link :to="{ name: 'about' }">Privacy Policy</router-link></li>
            <li><router-link :to="{ name: 'course' }">Payment Policy</router-link></li>
            <li><router-link :to="{ name: 'instructor' }">Refund Policy</router-link></li>
          </ul>
        </nav>
      </div>
      <div class="footer__subCRibe">
        <p>Connect with us on social media</p>
        <!-- <form action="#"><input type="email" placeholder="EMAIL HERE"><input type="submit" value="SUBCRIBE"></form> -->
        <p class="footer__subCRibe--follow">
          <a href="#" class="icon-facebook-squared"></a>
          <a href="#" class="icon-twitter"></a>
          <a href="#" class="icon-instagram"></a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {

  };
</script>

<style lang="postcss" scoped>
  .footer {
    bg: map(colors, gradPink);
    p: 5rem 0;

    &__loGO, &__naviGAtion, &__subCRibe {
      float: left;
      m: * 2%;
    }

    &__loGO {
      w: 15%;
      ml: 0;

      a {
        display: block;
        ff: 'Kaushan Script', cursive;
        fz: 4rem;
        c: #FFF;
        text-decoration: none;

        &:hover {
          c: map(colors, secondary);
        }

        &:hover, &:focus {
          outline: none;
        }
      }
    }

    &__naviGAtion {
      w: 42%;

      &--listItems {
        float: left;
        m: * 2%;

        &:first-child {
          ml: 0;
        }

        &:last-child {
          mr:0;
        }

        w: 48%;

        ul {
          margin: 0;
          padding: 0;
          list-style: none;

          li {
            m: .7rem *;

            a {
              c: #FFF;
              text-decoration: none;
              display: block;

              &:hover {
                c: map(colors, secondary);
              }

              &:hover, &:focus {
                outline: none;
              }
            }
          }
        }
      }
    }

    &__subCRibe {
      w: 35%;
      mr: 0;

      p {
        color: #FFF;
        font-size: 2rem;
        margin-bottom: .8rem;

        &:first-child {
          mt: 0.7rem;
        }
      }

      form {
        input[type="email"], input[type="submit"] {
          display: inline-block;
          font-size: 1.4rem;
        }

        input[type="email"] {
          border: none;
          padding: 1rem 1.6rem;
          background: #f1f1f1;
          width: 60%;
        }

        input[type="submit"] {
          c: #FFF map(colors, secondary);
          border: none;
          border-radius: 25px;
          padding: 1rem 2.6rem;
          ml: 1rem;
          w: 35%;
          fw: 700;
          -webkit-box-shadow: 1px 1px 6px 2px rgba(166,90,204,1);
          -moz-box-shadow: 1px 1px 6px 2px rgba(166,90,204,1);
          box-shadow: 1px 1px 6px 2px rgba(166,90,204,1);
        }
      }

      &--follow {
        text-transform: capitalize;

        a {
          text-decoration: none;
          display: inline-block;
          c: map(colors, primary);
          fz: 2rem;
        }
      }
    }

  }
</style>
