<template>
  <section class="container container--full container--wr container--rel container--ovh">
    <!-- Page banner -->
    <page-banner>
      Courses
    </page-banner>
    <!-- Page banner end -->
    <my-courses/>
  </section>
</template>

<script>
  import MyCourses from '~/components/courses.vue';
  import PageBanner from '~/components/pageBanner.vue';

  export default {
    components: {
      MyCourses,
      PageBanner
    }
  };
</script>

<style lang="postcss" scoped>

</style>
