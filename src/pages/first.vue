<template>
  <div>
    Hi - {{data}}
    <hr />
    <nuxt-link to="/second">Second</nuxt-link>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  // @ts-ignore
  async asyncData({ query, store, redirect, $axios }) {
    let data;
    try {
      const response = await $axios.post('/api/data');
      data = response.data.date;
    } catch (e) {
      console.error('get', e);
    }

    return {
      data
    };
  }
});
</script>
