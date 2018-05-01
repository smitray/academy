<template>
  <div class="courses container container--wr container--ovh container--relc container--block">
    <h2>Popular courses</h2>
    <div class="courses--wr">
      <div class="courses--3x">
        <div class="courses--imgWr">
          <img src="~/assets/img/mock-course.jpeg" alt="">
          <div class="courses--thumbBadge">
            <p>Top courses</p>
          </div>
        </div>
        <div class="courses--ctWr">
          <h3><a href="/course/123">Best course name</a></h3>
          <p><span class="left">£35</span><span class="right"><i class="icon-users"></i>35</span></p>
        </div>
      </div>
      <div class="courses--3x">
        <div class="courses--imgWr">
          <img src="~/assets/img/mock-course.jpeg" alt="">
          <div class="courses--thumbBadge">
            <p>Top courses</p>
          </div>
        </div>
        <div class="courses--ctWr">
          <h3><a href="#">Best course name</a></h3>
          <p><span class="left">£35</span><span class="right"><i class="icon-users"></i>35</span></p>
        </div>
      </div>
      <div class="courses--3x">
        <div class="courses--imgWr">
          <img src="~/assets/img/mock-course.jpeg" alt="">
          <div class="courses--thumbBadge">
            <p>Top courses</p>
          </div>
        </div>
        <div class="courses--ctWr">
          <h3><a href="#">Best course name</a></h3>
          <p><span class="left">£35</span><span class="right"><i class="icon-users"></i>35</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  };
</script>

<style lang="postcss" scoped>
  .courses {
    mb: 4rem;

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

    &--3x {
      float: left;
      m: * 0.8%;
      w: 32.26%;
      -webkit-box-shadow: 0px 2px 8px 1px rgba(0,0,0,0.11);
      -moz-box-shadow: 0px 2px 8px 1px rgba(0,0,0,0.11);
      box-shadow: 0px 2px 8px 1px rgba(0,0,0,0.11);

      &:nth-child(3n+1) {
        ml: 0;
      }

      &:nth-child(3n) {
        mr: 0;
      }

      h3 {
        fw: normal;
        fz: 2.4rem;
        c: #747176;
        text-transform: capitalize;

        a {
          text-decoration: none;
          c: inherit;

          &:hover {
            c: map(colors, primary);
          }
        }
      }
    }

    &--imgWr {
      position: relative;
      img {
        display: block;
        w: 100%;
        h: auto;
      }
    }

    &--ctWr {
      w: 100%;
      overflow: hidden;
      padding: .8rem;

      p {
        pr: 0.8rem;

        span {
          &.right {
            float: right;
            c: map(colors, primary);
          }
        }
      }
    }

    &--thumbBadge {
      position: absolute 10% * * 0;
      c: #FFF map(colors, badge);
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;

      p {
        margin: 0;
        padding: .8rem 2rem;
      }

    }
  }
</style>
