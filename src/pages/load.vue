<template>
  <div>xxx</div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  async asyncData({ $axios }) {
    const ip = await $axios.$get('http://icanhazip.com');
    console.log('got ip');
    return { ip };
  }
});
</script>
