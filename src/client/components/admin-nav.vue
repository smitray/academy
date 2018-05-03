<template>
  <nav class="nav--admin">
    <!-- <div class="proxy"></div> -->
    <h4>membership manager</h4>
    <ul>
      <li><router-link :to="{ name: 'admin' }">Dashboard</router-link></li>
      <li><a href="#">mentors / consultant</a></li>
      <li><a href="#">enterpreneurs</a></li>
      <li><a href="#">executives</a></li>
      <li><a href="#">promoters</a></li>
      <li><a href="#">vendors</a></li>
      <li><a href="#">buyers</a></li>
      <li><router-link :to="{ name: 'admin-instructors' }">trainers</router-link></li>
      <li><router-link :to="{ name: 'admin-students' }">students</router-link></li>
    </ul>
    <h4>subscription manager</h4>
    <ul>
      <li>
        <a href="#">inventory</a>
        <ul>
          <li><a href="#">transactions</a></li>
          <li><a href="#">payments</a></li>
          <li><a href="#">raise invoice</a></li>
        </ul>
      </li>
      <li>
        <a href="#">vendors</a>
        <ul>
          <li><a href="#">invoice</a></li>
          <li><a href="#">expenses</a></li>
        </ul>
      </li>
    </ul>
    <h4>tool manager</h4>
    <ul>
      <li><router-link :to="{ name: 'admin-tool' }">training academy</router-link></li>
    </ul>
  </nav>
</template>

<script>
  export default {

  };
</script>

<style lang="postcss" scoped>
  .proxy {
    h: 64px;
  }
  .nav--admin {
    background: rgba(184,107,220,1);
    background: -moz-linear-gradient(top, rgba(184,107,220,1) 0%, rgba(227,86,175,1) 100%);
    background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(184,107,220,1)), color-stop(100%, rgba(227,86,175,1)));
    background: -webkit-linear-gradient(top, rgba(184,107,220,1) 0%, rgba(227,86,175,1) 100%);
    background: -o-linear-gradient(top, rgba(184,107,220,1) 0%, rgba(227,86,175,1) 100%);
    background: -ms-linear-gradient(top, rgba(184,107,220,1) 0%, rgba(227,86,175,1) 100%);
    background: linear-gradient(to bottom, rgba(184,107,220,1) 0%, rgba(227,86,175,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b86bdc', endColorstr='#e356af', GradientType=0 );

    w: 20%;
    float: left;
    h: 100vh;
    text-transform: capitalize;

    h4 {
      p: 1rem 1.5rem;
      bg: map(colors, primary);
      c: #FFF;
      text-align: right;
      mb: 1rem;

      &:first-child {
        mt: 0;
      }
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        m: 0.7rem *;
        p: * 1rem;

        a {
          text-decoration: none;
          display: block;
          c: #FFF;

          &:hover {
            c: map(colors, primary);
          }
        }

        ul {
          ml: 2rem;
        }
      }
    }
  }
</style>
