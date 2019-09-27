import Vue from 'vue';

Vue.directive('click-outside', {
  bind: (el, binding, vnode) => {
    el.clickOutsideEvent = event => {
      if (!(el === event.target || el.contains(event.target))) {
        if (vnode && vnode.context) {
          vnode.context[binding.expression](event);
        }
      }
    };
    document.body.addEventListener(
      'ontouchstart' in document.documentElement ? 'touchstart' : 'click',
      el.clickOutsideEvent
    );
  },
  unbind(el) {
    document.body.removeEventListener(
      'ontouchstart' in document.documentElement ? 'touchstart' : 'click',
      el.clickOutsideEvent
    );
  }
});
