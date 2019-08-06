import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _1fa0c575 = () => interopDefault(import('../src/pages/computed-head.vue' /* webpackChunkName: "pages/computed-head" */))
const _55533df7 = () => interopDefault(import('../src/pages/create.vue' /* webpackChunkName: "pages/create" */))
const _7b98cc85 = () => interopDefault(import('../src/pages/first.vue' /* webpackChunkName: "pages/first" */))
const _1cfa656f = () => interopDefault(import('../src/pages/second.vue' /* webpackChunkName: "pages/second" */))
const _05dedb1c = () => interopDefault(import('../src/pages/vuex-counter.vue' /* webpackChunkName: "pages/vuex-counter" */))
const _438941a7 = () => interopDefault(import('../src/pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/computed-head",
      component: _1fa0c575,
      name: "computed-head"
    }, {
      path: "/create",
      component: _55533df7,
      name: "create"
    }, {
      path: "/first",
      component: _7b98cc85,
      name: "first"
    }, {
      path: "/second",
      component: _1cfa656f,
      name: "second"
    }, {
      path: "/vuex-counter",
      component: _05dedb1c,
      name: "vuex-counter"
    }, {
      path: "/",
      component: _438941a7,
      name: "index"
    }],

    fallback: false
  })
}
