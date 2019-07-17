<template>
  <div>{{ foo }} <button @click="addHandler()">x</button></div>
</template>

<script lang="ts">
import { add } from '@/lib';
export default {
  async asyncData() {
    console.log('called!');
    return {
      foo: 'bar'
    };
  },
  methods: {
    addHandler() {
      console.log(add(1, 2));
    }
  }
};
</script>
