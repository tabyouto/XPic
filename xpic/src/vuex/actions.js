/**
 * api请求操作
 */
import 'whatwg-fetch';

import host from '../host.js';
import {isEmpty} from '../lib/utils';


export const incrementCounter = function ({ dispatch, state }) {
  dispatch('INCREMENT', 1)
};

export const updateBucketName = function( {dispatch}, current_name) {
  dispatch('SET_BUCKET_NAME',current_name)
};

/**
 * 设置添加对话框显示状态
 * @param dispatch
 * @param flag
 */
export const updateModalFlag = function( {dispatch}, flag) {
  dispatch('SET_MODAL_FLAG',flag)
};

/**
 * 全局监听路由参数
 */
export const updateRouterParams = function( {dispatch}, paramsObj) {
    dispatch('SET_ROUTER_PARAMS', paramsObj);
};

/**
 * 全局监听路由参数
 */
export const updateCurrentRouter = function( {dispatch}, currentRouter) {
    dispatch('SET_CURRENT_ROUTE', currentRouter);
};

/**
 * get请求
 * @param  {String} options.url   api地址
 * @param  {String} options.query query参数
 * @return {Promise}               Promise
 */
let DEBUG = false;
let apiUrl = DEBUG ?  './assets/data' : host().api;
let suffix = DEBUG ? '.json' : '';



const _get = ({ url }) => {
  let _url;
  _url =  apiUrl +`${url}` + suffix;
  return fetch(_url)
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res.json();
      }
      return Promise.reject(new Error(res.status));
    });
};

const _post = (url, params) => {
  let postData = '';
    if(isEmpty(params)) {

    }else {
        Object.keys(params).forEach(function (key) {
            postData = key + '=' + params[key] + '&' + postData;
        });
        postData = postData.substr(0,postData.length-1);

    }
  return fetch(apiUrl +`${url}` + suffix, {
    method: 'POST',
    body: postData,
    headers: {
      // Accept: 'application/json',
      // 'Content-Type': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {

        return Promise.resolve(res.json()); //返回json对象
      }
      return Promise.reject(new Error(res.status));
    });
};



const _handleRes = (res) => {
    // var res = event();
    if(res.ret !== 1) {
        return Promise.reject(res.msg);
    }else {
        return Promise.resolve(res.data);

    }
}




export const fetchTopicLists = ({ dispatch }, topicTab, page) => {
  const url = '/topics';
  return _get( {url} )
    .then((json) => {
      if (json) {
        return dispatch('FETCH_TOPIC_LISTS_SUCCESS', json, topicTab, page);
      }
      return Promise.reject(new Error('fetchTopicLists failure'));
    })
    .catch((error) => {
      dispatch('FETCH_TOPIC_LISTS_FAILURE', topicTab, page);
      return Promise.reject(error);
    });
};


/**
 * 获取仓库列表
 * @param dispatch
 * @param bucket_name
 * @returns {Promise<U>|*|Promise.<TResult>}
 */
export const fetchBucketLists = ({ dispatch }, data) => {
  const url = '';
  // const data = data || {name: 'bucket'};
  return _post( url,data ).then(function(res) {
      dispatch('SET_BUCKET_LISTS',res.data);
      return _handleRes(res);
  });
};


/**
 * 添加bucket
 */
export const postABucket = ({dispatch},data) => {
    const url = '';
    let self = this;
    return _post(url,data).then(function(res) {
        let tmp = {name:'bucket'};
        fetchBucketLists({dispatch},tmp);
        return _handleRes(res);
    });
};
/**
 * change fileName
 */
export const modifyFileName = ({dispatch},data) => {
    const url = '';
    let self = this;
    return _post(url,data).then(function(res) {
        return _handleRes(res);
    });
};

/**
 * delete files
 */
export const deleteFile = ({dispatch},data) => {
    const url = '';
    let self = this;
    return _post(url,data).then(function(res) {
        return _handleRes(res);
    });
};

/**
 * 获取用户信息
 */
export const fetchUserInfo = ({dispatch},data) => {
    console.log(data);
    const url = '';
    return _post( url,data ).then(function(res) {
        return _handleRes(res);
    });
};

/**
 * 保存用户信息
 */
export const referUserInfo = ({dispatch},data) => {
    console.log(data);
    const url = '';
    return _post( url,data ).then(function(res) {
        return _handleRes(res);
    });
};

/**
 * 获取每个空间信息
 */
export const fetchBucketFileList = ({dispatch},data) => {
    const url = '';
    return _post( url,data ).then(function(res) {
        return _handleRes(res);
    });
};