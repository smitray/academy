<template>
  <section class="container container--full container--wr container--rel container--ovh">
    <!-- Page banner -->
    <page-banner>
      Courses
    </page-banner>
    <!-- Page banner end -->
    <my-courses :courses="courses" />
  </section>
</template>

<script>
  import MyCourses from '~/components/courses.vue';
  import PageBanner from '~/components/pageBanner.vue';

  export default {
    data: () => ({
      courses: {}
    }),
    components: {
      MyCourses,
      PageBanner
    },
    mounted() {
      this.allCourse();
    },
    methods: {
      async allCourse() {
        try {
          const { data } = await this.$axios.$get('/api/course');
          this.courses = data.courses;
        } catch (e) {
          console.log(e);
        }
      }
    }
  };
</script>

<style lang="postcss" scoped>

</style>
