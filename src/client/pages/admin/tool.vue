<template>
  <section class="admin__tool">
    <div class="admin__tool--4x">
      <p class="big">1001</p>
      <p class="small">GBP collected by upload</p>
    </div>
    <div class="admin__tool--4x">
      <p class="big">1002</p>
      <p class="small">GBP Collected By Tests</p>
    </div>
    <div class="admin__tool--4x">
      <p class="big">1003</p>
      <p class="small">Admin Amount By Test (CBT/2)</p>
    </div>
    <div class="admin__tool--4x">
      <p class="big">1004</p>
      <p class="small">Admin Amount By Upload (CBT/2)</p>
    </div>
  </section>
</template>

<script>
  export default {
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
