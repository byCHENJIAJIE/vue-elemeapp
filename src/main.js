// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router'; // TODO 不知道为什么要改成下面那个 (在./router中设置了)
// import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import 'common/stylus/index.styl';

Vue.config.productionTip = false; // TODO 有什么用

Vue.use(VueResource);

router.push('/goods'); // 让一开始就进入到/goods路由

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
}); // TODO 文档写得太简单，其实还需要这些东西的

