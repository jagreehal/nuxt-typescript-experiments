<template>
  <div>
    Hi - {{data}}
    <hr />
    {{session}}
    <hr />
    <nuxt-link to="/second">Second</nuxt-link>
    <button @click="add">Add</button>
    <button @click="logout">Logout</button>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  methods: {
    add(){
      this.$store.dispatch('add')
    },
    logout(){
      this.$store.dispatch('logout')
    }
  },
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
