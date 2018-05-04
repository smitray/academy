<template>
  <section class="container container--full container--wr container--rel container--ovh addCourse">
    <!-- Page banner -->
    <page-banner>
      Add</br>
      Course
    </page-banner>
    <!-- Page banner end -->
    <div class="container container--wr container--ovh container--rel container--block__ct addCourse--wr">
      <router-link :to="{ name: 'auth' }"><i class="icon-"></i>Back to dashboard</router-link>
      <form enctype="multipart/form-data">
        <div class="course__ct" v-if="!course.courseId">
          <input type="text" placeholder="Title of course" v-model="courseTitle">
          <select v-model="category">
            <option value="placeholder" disabled>Choose category</option>
            <option v-for="opt in options" v-bind:value="$options.filters.makeVal(opt)">
              {{ opt }}
            </option>
          </select>
          <textarea cols="30" rows="10" placeholder="Enter description" v-model="description" v-on:blur="addLecture"></textarea>
        </div>
        <div class="addCourse__addLecture--list" v-else>
          <h3>{{ course.courseTitle }}</h3>
          <p>{{ course.description }}</p>
          <h4>Context</h4>
          <ul v-if="course.lecture.length">
            <li v-for="lecture in course.lecture">{{ lecture.lectureTitle }}
              <ul v-if="lecture.content.length">
                <li v-for="ct in lecture.content">{{ ct.title }}</li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="add__lecture--btn">
          <a href="#" @click.prevent="addLectureToggle">Add lecture</a>
        </div>
        <div class="addCourse__addLecture--form" v-if="lectureShow">
          <input type="text" placeholder="Add lecture title" v-model="lectureTitle" v-on:blur="addContent">
          <a href="#" @click.prevent="addContentToggle">Add content</a>
        </div>
        <div class="addCourse__addContent--form" v-if="contentShow">
          <input type="text" placeholder="Add content title" v-model="contentTitle">
          <div class="addCourse__addContent--form--btnWr">
            <a href="#" @click.prevent="triggerFile('video')">Video</a>
            <a href="#" @click.prevent="triggerFile('slide')">Slide</a>
            <a href="#" @click.prevent="triggerFile('article')">Article</a>
            <input type="file" ref="fileInput" @change="filesChange">
          </div>
        </div>
        <input type="text" placeholder="Price of the course in GBP" v-model="price">
        <p>By clicking on Pay & Publish button I agree to the terms & conditions of the website</p>
      </form>
      <a href="#" class="btn-primary" @click.prevent="postCourse">Pay & Publish</a>
    </div>
  </section>
</template>

<script>
  import _ from 'lodash';
  import PageBanner from '~/components/pageBanner.vue';

  export default {
    components: {
      PageBanner
    },
    middleware: 'auth',
    data: () => ({
      complete: false,
      options: [
        'Physics',
        'Astronomy or other Space Science',
        'Philosophy',
        'Engineering',
        'Math',
        'History',
        'Chemistry',
        'Biology or other Life Science',
        'Foreign language',
        'Computer Science',
        'Agriculture',
        'Geology or other Earth Science',
        'Architecture',
        'Literature',
        'Law',
        'Geography',
        'Music',
        'Economics',
        'Study of Some Foreign Place or Culture',
        'Archaeology',
        'Anthropology',
        'Religion or Theology',
        'Art',
        'Education',
        'Foreign Language',
        'Political Science',
        'Drama or Film',
        'Phys Ed Sports Management',
        'Journalism',
        'Business',
        'Psychology',
        'Sociology'
      ],
      courseTitle: '',
      category: 'placeholder',
      description: null,
      lectureTitle: null,
      contentTitle: '',
      file: '',
      fileType: '',
      price: '',
      course: {
        courseId: null,
        courseTitle: '',
        description: '',
        lecture: []
      },
      presentLectureId: null,
      lectureShow: false,
      contentShow: false
    }),
    filters: {
      makeVal: string => string.replace(/\s+/g, '-').toLowerCase(),
    },
    methods: {
      triggerFile(typr) {
        this.fileType = typr;
        this.$refs.fileInput.click();
      },
      addLectureToggle() {
        this.lectureShow = true;
      },
      async addLecture() {
        if (this.description) {
          try {
            const { data } = await this.$axios.$post('/api/course', {
              title: this.courseTitle,
              category: this.category,
              description: this.description
            });
            this.course.courseId = data.course._id;
            this.course.courseTitle = this.courseTitle;
            this.course.description = this.description;
          } catch (e) {
            console.log(e);
          }
        }
      },
      addContentToggle() {
        this.contentShow = true;
      },
      async addContent() {
        if (this.lectureTitle) {
          try {
            const { data } = await this.$axios.$post('/api/course/lecture', {
              crId: this.course.courseId,
              title: this.lectureTitle
            });
            this.course.lecture.push({
              lectureId: data.lecture._id,
              lectureTitle: this.lectureTitle,
              content: []
            });
            this.presentLectureId = data.lecture._id;
          } catch (e) {
            console.log(e);
          }
        }
      },
      async postCourse() {
        try {
          const { data } = await this.$axios.$put(`/api/course/${this.course.courseId}`, {
            price: this.price
          });
          this.$store.commit('paymentToggle')
        } catch (e) {
          console.log(e);
        }
      },
      async filesChange() {
        this.file = this.$refs.fileInput.files[0]; //eslint-disable-line
        if (this.file) {
          try {
            const formData = new FormData();
            formData.append('docs', this.file);
            const { data } = await this.$axios.$post('/api/files', formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            });
            const { data: content } = await this.$axios.$post('/api/course/content', {
              title: this.contentTitle,
              fileId: data.files._id,
              ctType: this.fileType,
              lectureId: this.presentLectureId
            });
            const record = _.find(this.course.lecture, {
              lectureId: this.presentLectureId
            });
            record.content.push(content.content);
          } catch (e) {
            console.log(e);
          }
        }
      }
    }
  };
</script>

<style lang="postcss" scoped>
  .add__lecture--btn, .addCourse__addLecture--form {
    a {
      m: * 0.5%;
    }
  }
  .addCourse {
    bg: #F5F6FA;

    &__addLecture--form, &__addLecture--list, &__addContent--form, &__addLecture--list {
      w: 100%;
      overflow: hidden;
    }

    &--wr {
      m: 4rem *;

      .btn-primary {
        float: right;
        mb: 1rem;
        mr: 1rem;
      }

      form {
        overflow: hidden;
        p: * 1rem;

        input[type="text"], textarea, select, a {
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

        input[type="file"] {
          display: none;
        }

        a {
          text-decoration: none;
          text-align: center;

          &:hover {
            c: map(colors, primary);
          }
        }
      }
    }

    &__addContent--form, &__addLecture--list {
      w: 100%;
      bg: #FDFDFE;
      p: 2rem;
      m: 1.6rem *;
      -webkit-box-shadow: 1px 1px 1px 2px rgba(242,242,242,1);
      -moz-box-shadow: 1px 1px 1px 2px rgba(242,242,242,1);
      box-shadow: 1px 1px 1px 2px rgba(242,242,242,1);
    }

    &__addLecture--list {
      h3, h4 {
        c: map(colors, primary);
      }

      h4 {
        m: 0.6rem *;
      }

      p {
        c: #757575;
      }

      ul {
        margin: 0;
        padding: 0;
        list-style: none;

        li {
          m: 0.6rem *;

          ul {
            ml: 1rem;

            li {
              c: #757575;
            }
          }
        }
      }
    }

    &__addContent--form {
      a {
        display: inline-block !important;
        w: 30% !important;
        position: relative;
        padding-top: 8rem !important;

        &:before {
          font-family: "fontello";
          font-style: normal;
          font-weight: normal;
          speak: none;

          display: block;
          text-decoration: inherit;
          width: 1em;
          text-align: center;
          /* opacity: .8; */

          /* For safety - reset parent styles, that can break glyph codes*/
          font-variant: normal;
          text-transform: none;

          /* fix buttons height, for twitter bootstrap */
          line-height: 1em;

          /* you can be more comfortable with increased icons size */
          /* font-size: 120%; */

          /* Font smoothing. That was taken from TWBS */
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          position: absolute 25px * * 50%;
          transform: translateX(-50%);
          fz: 5rem;
          c: map(colors, primary);
        }

        &:nth-child(1) {
          &:before {
            content: '\e803';
          }
        }

        &:nth-child(2) {
          m: * 5%;
          &:before {
            content: '\e804';
            transform: translateX(-69%);
          }
        }

        &:nth-child(3) {
          &:before {
            content: '\e805';
            transform: translateX(-55%);
          }
        }
      }
    }
  }
</style>
