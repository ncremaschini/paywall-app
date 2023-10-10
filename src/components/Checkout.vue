<template>
    <div>
      <stripe-checkout
        ref="checkoutRef"
        mode="subscription"
        :pk="publishableKey"
        :line-items="lineItems"
        :success-url="successURL"
        :cancel-url="cancelURL"
        @loading="(v) => (loading = v)"
      />
      <button @click="submit">Subscribe!</button>
    </div>
  </template>
  
  <script>
  // :sessionId="sessionId"
  import { StripeCheckout } from '@vue-stripe/vue-stripe';
  export default {
    components: {
      StripeCheckout,
    },
    data() {
      return {
        publishableKey: 
          'pk_test_51Nzd5xBLQdUhcSv9wat8ayHL8V3WRxwVcjvS3oGpefamNq1VwTeI3zzeDZih3JEXV7zo0CoYxuvefKoJOLhBQbr200K4ujEdKW',
        loading: false,
        sessionId: '',
        lineItems: [
          {
            price: 'price_1NznItBLQdUhcSv9ipfsrdRU', // The id of the recurring price you created in your Stripe dashboard
            quantity: 1,
          },
        ],
        successURL:
          'https://paywall-be.vercel.app/subscription/success?session_id={CHECKOUT_SESSION_ID}',
        cancelURL: window.location.origin + '/cancel',
      };
    },
    methods: {
      submit() {
        // You will be redirected to Stripe's secure checkout page
        this.$refs.checkoutRef.redirectToCheckout();
      },
    },
  };
  </script>
  