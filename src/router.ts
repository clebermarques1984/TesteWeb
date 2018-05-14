import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home.vue';
const Portfolio = () =>  import('./pages/Portfolio.vue');
const Stocks = () => import('./pages/Stocks.vue');

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio,
    },
    {
      path: '/stocks',
      name: 'stocks',
      component: Stocks,
    },
  ],
});
