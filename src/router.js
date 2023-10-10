import { createRouter, createWebHistory } from 'vue-router';

import Blogpost from './components/BlogPost.vue';
import CancelPayment from './components/CancelPayment.vue';
import Home from './components/Home.vue';
import Subscribe from './components/Checkout.vue';
import SuccessPayment from './components/SuccessPayment.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/subscribe',
    name: 'subscribe',
    component: Subscribe,
  },

  {
    path: '/success/:customerId',
    name: 'success',
    component: SuccessPayment,
  },
  {
    path: '/cancel',
    name: 'cancel',
    component: CancelPayment,
  },
  {
    path: '/post/:id',
    name: 'BlogPost',
    component: Blogpost,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
