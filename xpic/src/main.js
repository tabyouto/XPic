import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import routerMap from './router';
import store from './vuex/store'; // import the store we just created
import { updateBucketName,fetchBucketLists,updateRouterParams,updateCurrentRouter } from './vuex/actions';
import {isEmpty} from './lib/utils';



Vue.use(VueRouter);
Vue.config.devtools = true;


//实例化VueRouter
let router = new VueRouter({
  hashbang: true,
  history: false,
  saveScrollPosition: true,
  transitionOnLoad: true
});
window.Vue = Vue;

//登录中间验证，页面需要登录而没有登录的情况直接跳转登录
router.beforeEach((transition) => {
  //处理左侧滚动不影响右边

  // if (transition.to.auth) {
  //   if (localStorage.userId) {
  //     transition.next();
  //   } else {
  //     var redirect = encodeURIComponent(transition.to.path);
  //     transition.redirect('/login?redirect=' + redirect);
  //   }
  // } else {
        transition.next();
        let vm = transition.to.router.app.$root;
        let routeObj = isEmpty(transition.to.params);
        if(!routeObj) {
            vm.setBucketName(transition.to.params.bucketname);
        }else {
          vm.setBucketName('');
        }
        vm.updateRouterParams(transition.to.path);//记录整个路由地址（包括参数）
        vm.updateCurrentRouter(transition.to.name);//记录当前路由
  // }
});

let app = Vue.extend({

    store:store,
    vuex: {
        actions: {
            setBucketName: updateBucketName,
            fetchBucketLists: fetchBucketLists,
            updateRouterParams: updateRouterParams,
            updateCurrentRouter: updateCurrentRouter
        }
    },
    components: {
        leftMenu, topMenu
    },
    ready() {
        this.fetchBucketLists({name: 'bucket'});
        console.log()
    }

});
routerMap(router);

router.start(app, "#app");

