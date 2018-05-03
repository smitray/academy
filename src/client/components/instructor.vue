<template>
  <div class="instructor container container--wr container--ovh container--rel container--block">
    <h2>Our Instructors</h2>
    <div class="instructor--wr">
      <div class="instructor--5x">
        <div class="instructor--img"><img src="~/assets/img/mock-trainer-1.jpg" alt=""></div>
        <h5>Instructor Name</h5>
        <p>Lorem ipsum dolor sit amet, consectetur.</p>
        <router-link :to="{ name: 'profile-id', params: { id: 2 } }">Profile</router-link>
      </div>
      <div class="instructor--5x">
        <div class="instructor--img"><img src="~/assets/img/mock-trainer-1.jpg" alt=""></div>
        <h5>Instructor Name</h5>
        <p>Lorem ipsum dolor sit amet, consectetur.</p>
        <router-link :to="{ name: 'profile-id', params: { id: 2 } }">Profile</router-link>
      </div>
      <div class="instructor--5x">
        <div class="instructor--img"><img src="~/assets/img/mock-trainer-2.jpeg" alt=""></div>
        <h5>Instructor Name</h5>
        <p>Lorem ipsum dolor sit amet, consectetur.</p>
        <router-link :to="{ name: 'profile-id', params: { id: 2 } }">Profile</router-link>
      </div>
      <div class="instructor--5x">
        <div class="instructor--img"><img src="~/assets/img/mock-trainer-1.jpg" alt=""></div>
        <h5>Instructor Name</h5>
        <p>Lorem ipsum dolor sit amet, consectetur.</p>
        <router-link :to="{ name: 'profile-id', params: { id: 2 } }">Profile</router-link>
      </div>
      <div class="instructor--5x">
        <div class="instructor--img"><img src="~/assets/img/mock-trainer-1.jpg" alt=""></div>
        <h5>Instructor Name</h5>
        <p>Lorem ipsum dolor sit amet, consectetur.</p>
        <router-link :to="{ name: 'profile-id', params: { id: 2 } }">Profile</router-link>
      </div>
      <div class="instructor--5x">
        <div class="instructor--img"><img src="~/assets/img/mock-trainer-1.jpg" alt=""></div>
        <h5>Instructor Name</h5>
        <p>Lorem ipsum dolor sit amet, consectetur.</p>
        <router-link :to="{ name: 'profile-id', params: { id: 2 } }">Profile</router-link>
      </div>
      <div class="instructor--5x">
        <div class="instructor--img"><img src="~/assets/img/mock-trainer-2.jpeg" alt=""></div>
        <h5>Instructor Name</h5>
        <p>Lorem ipsum dolor sit amet, consectetur.</p>
        <router-link :to="{ name: 'profile-id', params: { id: 2 } }">Profile</router-link>
      </div>
      <div class="instructor--5x">
        <div class="instructor--img"><img src="~/assets/img/mock-trainer-1.jpg" alt=""></div>
        <h5>Instructor Name</h5>
        <p>Lorem ipsum dolor sit amet, consectetur.</p>
        <router-link :to="{ name: 'profile-id', params: { id: 2 } }">Profile</router-link>
      </div>
      <div class="instructor--5x">
        <div class="instructor--img"><img src="~/assets/img/mock-trainer-2.jpeg" alt=""></div>
        <h5>Instructor Name</h5>
        <p>Lorem ipsum dolor sit amet, consectetur.</p>
        <router-link :to="{ name: 'profile-id', params: { id: 2 } }">Profile</router-link>
      </div>
      <div class="instructor--5x">
        <div class="instructor--img"><img src="~/assets/img/mock-trainer-1.jpg" alt=""></div>
        <h5>Instructor Name</h5>
        <p>Lorem ipsum dolor sit amet, consectetur.</p>
        <router-link :to="{ name: 'profile-id', params: { id: 2 } }">Profile</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  };
</script>

<style lang="postcss" scoped>
  .instructor {
    m: 5rem *;

    h2 {
      c: map(colors, primary);
      fz: 5rem;
      fw: normal;
      text-align: center;
      text-transform: capitalize;
    }

    &--wr {
      overflow: hidden;
      w: 100%;
      clear: both;
      p: 10px;
    }

    &--5x {
      float: left;
      mih: 1px;
      m: 0.9rem 0.8%;
      w: 18.72%;
      text-align: center;

      h5 {
        fw: normal;
        c: #747176;
        fz: 2rem;
        m: 0.6rem 0;
      }

      p {
        c: #747176;
        fz: 1.6rem;
        m: 0.6rem 0;
      }

      a {
        display: inline-block;
        text-decoration: none;
        border: 1px solid map(colors, secondary);
        border-radius: 25px;
        padding: 0.5rem 4.6rem;
        fz: 1.4rem;
        m: 1rem 0;
      }

      &:nth-child(5n+1) {
        ml: 0;
      }

      &:nth-child(5n) {
        mr: 0;
      }
    }

    &--img {
      p: 5px;
      img {
        display: block;
        w: 100%;
        h: auto;
        -webkit-border-top-right-radius: 50px;
        -webkit-border-bottom-left-radius: 50px;
        -moz-border-radius-topright: 50px;
        -moz-border-radius-bottomleft: 50px;
        border-top-right-radius: 50px;
        border-bottom-left-radius: 50px;
        -webkit-box-shadow: 1px 1px 2px 1px rgba(196,196,196,1);
        -moz-box-shadow: 1px 1px 2px 1px rgba(196,196,196,1);
        box-shadow: 1px 1px 2px 1px rgba(196,196,196,1);
      }
    }
  }
</style>
