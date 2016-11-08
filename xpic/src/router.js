'use strict';

export default [{
  path: '/',
  name: 'index',
  component: resolve => require(['./views/index.vue'], resolve)
}, {
  path: '/login',
  name: 'login',
  component: resolve => require(['./views/login.vue'], resolve)
}]
