import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/device/:type',
    name: 'device',
    component: () => import('../views/device.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
