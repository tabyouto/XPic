import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from './App.vue'
import routerMap from './router';
import store from './vuex/store'; // import the store we just created
import { updateBucketName,fetchBucketLists,updateRouterParams,updateCurrentRouter } from './vuex/actions';
import {isEmpty} from './lib/utils';

Vue.config.devtools = true;

Vue.use(VueRouter);


//实例化VueRouter
const router = new VueRouter({
  routes: routerMap,
  mode: 'hash',
  linkActiveClass: 'is-active'
});

//登录中间验证，页面需要登录而没有登录的情况直接跳转登录
//全局
router.beforeEach(({meta, path}, from, next) => {
  //var {auth = true} = meta
  //var isLogin = Boolean(store.state.user.id) //true用户已登录， false用户未登录
  //
  //if (auth && !isLogin && path !== '/login') {
  //  return next({ path: '/login' })
  //}
  next()
});


const app = new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
