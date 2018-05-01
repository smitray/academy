<template>
  <div class="container container--full container--wr container--ovh container--rel">
    <my-header/>
    <nuxt/>
    <my-footer/>
    <my-modal v-if="$store.state.showLogin"></my-modal>
    <my-modal v-if="$store.state.showSignup" signup="true"></my-modal>
    <new-modal v-if="$store.state.addNewModal"></new-modal>
    <payment-modal v-if="$store.state.paymentModal"></payment-modal>
  </div>
</template>

<script>
import MyHeader from '~/components/header.vue';
import MyFooter from '~/components/footer.vue';
import MyModal from '~/components/modal.vue';
import NewModal from '~/components/addNew.vue';
import PaymentModal from '~/components/paymentModal.vue';

export default {
  components: {
    MyHeader,
    MyFooter,
    MyModal,
    NewModal,
    PaymentModal
  },
  mounted() {

  }
};
</script>

<style lang="postcss">

</style>
