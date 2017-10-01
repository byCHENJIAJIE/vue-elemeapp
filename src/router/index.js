import Vue from 'vue';
import Router from 'vue-router';

import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller'; // TODO 可以到webpack.base上配置别名，就不用一直用相对地址

Vue.use(Router);

const routes = [
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/seller', component: seller }
];

export default new Router({
  routes
});
