// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
// import VueRouter from './router'; //TODO 不知道为什么要改成下面那个
import VueRouter from 'vue-router';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller'; // TODO 可以到webpack.base上配置别名，就不用一直用相对地址

Vue.config.productionTip = false; // TODO 有什么用

Vue.use(VueRouter);

const routes = [
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/seller', component: seller }
];

const router = new VueRouter({
  routes
});

router.push('/goods'); // 让一开始就进入到/goods路由

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
}); // TODO 文档写得太简单，其实还需要这些东西的

