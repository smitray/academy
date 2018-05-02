<template>
  <section class="admin__instructor">
    <h3>Trainers</h3>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>username</th>
          <th>Email</th>
          <th>Course published</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users">
          <td>{{ user.name }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.authorCourse ? user.authorCourse.length : 0 }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
  export default {
    layout: 'admin',
    async asyncData({ app }) {
      const { data } = await app.$axios.$get('/api/user/members/instructor');
      const { users } = data;
      return { users };
    }
  };
</script>

<style lang="postcss" scoped>
  .admin__instructor {

    h3 {
      text-align: center;
      c: map(colors, primary);
    }

    table {
      w: 100%;
      border-collapse: collapse;

      thead {
        tr {
          th {
            c: map(colors, primary);
            text-transform: capitalize;
            fw: normal;
            fz: 2.8rem;
            p: .8rem *;
          }
        }
      }

      tbody {
        tr {
          bg: #FFF;

          td {
            border: 2px solid #E5E9F2;
            padding: 1rem;
            text-align: center;
            c: #757575;

            &:first-child {
              text-align: left;
            }
          }
        }
      }
    }
  }
</style>
