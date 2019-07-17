<template>
  <div>{{ foo }}-x</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  // setup(props, ctx) {
  //   const $store = ctx.root.$store;
  //   // const $router = ctx.root.$router;
  //   // console.log($store);

  //   return {
  //     $store
  //   };
  // },

  async asyncData() {
    return { foo: 'baxxss' };
  }
});
</script>
