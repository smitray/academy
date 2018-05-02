<template>
  <div class="container container--full container--wr container--ovh container--rel">
    <admin-nav/>
    <div class="container--admin">
      <admin-header/>
      <div class="container--admin__content">
        <nuxt/>
      </div>
    </div>
  </div>
</template>

<script>
  import AdminHeader from '~/components/admin-header.vue';
  import AdminNav from '~/components/admin-nav.vue';

  export default {
    components: {
      AdminNav,
      AdminHeader
    }
  };
</script>

<style lang="postcss" scoped>
  .container--admin {
    h: 100vh;
    w: 80%;
    float: left;
    bg: #F5F6FA;

    &__content {
      w: 100%;
      p: 2rem;
    }
  }
</style>
