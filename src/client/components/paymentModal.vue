<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <a href="#" class="modal__close--btn" @click.prevent="$store.commit('paymentToggle')"><i class="icon-cancel"></i></a>
          <div class="modal__payment">
            <h3>Payment amount: {{ $store.state.payment.amount }} GBP</h3>
            <card class='stripe-card'
              :class='{ complete }'
              stripe='pk_test_XXXXXXXXXXXXXXXXXXXXXXXX'
              :options='stripeOptions'
              @change='complete = $event.complete'
            />
            <a href="#" class="btn-primary" @click.prevent="makePayment">{{ $store.state.payment.btnCap }}</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import { Card, createToken } from 'vue-stripe-elements-plus';

  export default {
    data: () => ({
      complete: false,
      stripeOptions: {
        color: '#757575'
      }
    }),
    components: {
      Card
    },
    methods: {
      async makePayment() {
        let link = {
          name: 'auth'
        };
        if (this.$store.state.payment.courseId) {
          link = {
            name: 'auth-test-id',
            params: {
              id: this.$store.state.payment.courseId
            }
          };
        }
        this.$router.push(link);
        this.$store.commit('paymentToggle');
      }
    }
  };
</script>

<style lang="postcss" scoped>
  .modal__payment {
    overflow: hidden;

    h3 {
      c: #FFF;
    }

    .stripe-card {
      bg: #f1f1f1;
      p: 0.6rem;
      m: 1rem *;
      overflow: hidden;
    }

    a {
      float: right;
      m: 1rem;
    }
  }
</style>
