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
  
  let publishableKey = process.env.VUE_APP_STRIPE_KEY; 
  let priceId = process.env.VUE_APP_STRIPE_PRICE_ID;
  let success_url = process.env.VUE_APP_BE_URL + '/subscription/success?session_id={CHECKOUT_SESSION_ID}'

  export default {
    components: {
      StripeCheckout,
    },
    data() {
      return {
        publishableKey: process.env.VUE_APP_STRIPE_KEY,
        loading: false,
        sessionId: '',
        lineItems: [
          {
            price: priceId, // The id of the recurring price you created in your Stripe dashboard
            quantity: 1,
          },
        ],
        successURL: success_url,
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
  