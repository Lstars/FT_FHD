import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import')
Vue.use(Router)

export default new Router({
// 后退后页面位置
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [
    {
      path: '/',
      name: 'sourceList',
      component: _import('sourceList')
    },
    {
      path: '/sourceList/:sessionId',
      name: 'sourceList',
      component: _import('sourceList')
    },
    {
      path: '/addSource/:sessionId',
      name: 'addSource',
      component: _import('addSource')
    }
  ]
})
