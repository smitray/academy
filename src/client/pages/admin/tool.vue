<template>
  <section class="admin__tool">
    <div class="admin__tool--4x">
      <p class="big">£143</p>
      <p class="small">Collected by upload</p>
    </div>
    <div class="admin__tool--4x">
      <p class="big">£246</p>
      <p class="small">Collected By Tests</p>
    </div>
    <div class="admin__tool--4x">
      <p class="big">£127</p>
      <p class="small">Admin earned by test</p>
    </div>
    <div class="admin__tool--4x">
      <p class="big">£146</p>
      <p class="small">Admin earned by upload</p>
    </div>
  </section>
</template>

<script>
  export default {
    middleware: 'auth',
    layout: 'admin'
  };
</script>

<style lang="postcss" scoped>
  .admin__tool {
    w: 100%;
    overflow: hidden;

    &--4x {
      width: 23.8%;
      float: left;
      m: * 0.8%;
      bg: #FFF;
      border-radius: 5px;
      -webkit-box-shadow: 1px 1px 2px 1px rgba(235,235,235,1);
      -moz-box-shadow: 1px 1px 2px 1px rgba(235,235,235,1);
      box-shadow: 1px 1px 2px 1px rgba(235,235,235,1);

      &:first-child {
        ml: 0;
      }

      &:last-child {
        mr: 0;
      }

      p.big {
        fz: 4rem;
        text-align: center;
        c: map(colors, primary);
        p: 2rem *;
      }

      p.small {
        c: #757575;
        fz: 1.6rem;
        text-align: center;
      }
    }
  }
</style>
