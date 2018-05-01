<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <a href="#" @click.prevent="gotoPage('addcourse')">Add new course</a>
          <a href="#" @click.prevent="gotoPage('addtest')">add new test</a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    methods: {
      gotoPage(page) {
        this.$store.commit('newToggle');
        this.$router.push({
          name: `auth-${page}`
        });
      }
    }
  };
</script>

<style lang="postcss" scoped>
  .modal-container {
    a {
      display: block;
      c: map(colors, primary) map(colors, secondary);
      text-decoration: none;
      m: 1.6rem *;
      p: .8rem *;
      text-align: center;
      text-transform: capitalize;
    }
  }
</style>
