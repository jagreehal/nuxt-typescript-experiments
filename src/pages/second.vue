<template>
  <div>
    Hi - {{data}}
        <hr />
    {{session}}
    <hr />
    <nuxt-link to="/first">first</nuxt-link>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  // @ts-ignore
  async asyncData({ query, store, redirect, $axios }) {
    let data;
    try {
      const response = await $axios.post('/data');
      data = response.data.date;
    } catch (e) {
      console.error('get', e);
    }

    return {
      data,
            session: store.state.session
    };
  }
});
</script>
