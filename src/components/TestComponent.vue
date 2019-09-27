<template>
  <div>
    <p>Times clicked: {{ count }}</p>
    <button @click="increment">
      increment
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data: () => ({
    count: 0
  }),
  methods: {
    increment() {
      this.count++;
    }
  }
});
</script>
