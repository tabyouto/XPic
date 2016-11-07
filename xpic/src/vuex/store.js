import Vue from 'vue';
import Vuex from 'vuex';
import {isEmpty} from '../lib/utils';
Vue.use(Vuex);

// Create an object to hold the initial state when
// the app starts up
const state = {
    count: 0,
    tab: '',
    count: '',
    bucket_name: '',
    bucket_lists: [],
    show_modal: false,
    router_params: '', //存储路由对象
    isEmpty_router_params: false,
    currentRouter: ''//当前路由
    // TODO: Set up our initial state
};

// Create an object storing various mutations. We will write the mutation
const mutations = {
    // TODO: set up our mutations
    INCREMENT (state, amount) {
        state.count = state.count + amount
    },
    FETCH_TOPIC_LISTS_SUCCESS (state, data, tab, count) {
        state.data = data;
        state.tab = tab;
        state.count = count;
    },
    SET_BUCKET_NAME (state, current_name) {
        state.bucket_name = current_name;
      console.log('state中的bucket_name'+ state.bucket_name);
    },
    SET_BUCKET_LISTS (state,lists) {
        state.bucket_lists = lists;
    },
    SET_MODAL_FLAG (state,flag) {
        state.show_modal = flag;
    },
    //全局监听路由参数
    SET_ROUTER_PARAMS (state,paramsStr) {
        state.router_params = paramsStr;
        state.isEmpty_router_params = paramsStr.toString().length > 1 ? false: true;
    },
    //监听当前路由name
    SET_CURRENT_ROUTE (state,currentRouter) {
        state.currentRouter = currentRouter;
    }
};


export default new Vuex.Store({
  state,
  mutations
})
