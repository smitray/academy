<template>
  <div class="container container--full container--wr container--ovh container--rel adminHeader">
    <a href="#" class="adminHeader__logo">academy</a>
  </div>
</template>

<style lang="postcss" scoped>
  .adminHeader {
    background: rgba(184,107,220,1);
    background: -moz-linear-gradient(left, rgba(184,107,220,1) 0%, rgba(227,86,175,1) 100%);
    background: -webkit-gradient(left top, right top, color-stop(0%, rgba(184,107,220,1)), color-stop(100%, rgba(227,86,175,1)));
    background: -webkit-linear-gradient(left, rgba(184,107,220,1) 0%, rgba(227,86,175,1) 100%);
    background: -o-linear-gradient(left, rgba(184,107,220,1) 0%, rgba(227,86,175,1) 100%);
    background: -ms-linear-gradient(left, rgba(184,107,220,1) 0%, rgba(227,86,175,1) 100%);
    background: linear-gradient(to right, rgba(184,107,220,1) 0%, rgba(227,86,175,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b86bdc', endColorstr='#e356af', GradientType=1 );

    &__logo {
      display: block;
      ff: 'Kaushan Script', cursive;
      fz: 4rem;
      c: #FFF;
      text-decoration: none;
      text-align: center;
      p: 2rem *;

      &:hover {
        c: map(colors, primary);
      }

      &:hover, &:focus {
        outline: none;
      }
    }
  }
</style>
