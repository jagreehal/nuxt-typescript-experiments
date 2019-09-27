import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b92d182e = () => interopDefault(import('../src/pages/load.vue' /* webpackChunkName: "pages/load" */))
const _0f8c0785 = () => interopDefault(import('../src/pages/x.vue' /* webpackChunkName: "pages/x" */))
const _4970305f = () => interopDefault(import('../src/pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/load",
      component: _b92d182e,
      name: "load"
    }, {
      path: "/x",
      component: _0f8c0785,
      name: "x"
    }, {
      path: "/",
      component: _4970305f,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
