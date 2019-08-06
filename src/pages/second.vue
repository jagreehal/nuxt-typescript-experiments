<template>
  <div>
    Hi - {{data}}
    <hr />
    <nuxt-link to="/first">first</nuxt-link>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { api } from '@/lib';
export default Vue.extend({
  // @ts-ignore
  async asyncData({ query, store, redirect }) {
    let data;
    try {
      const response = await api.get('/data');
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
