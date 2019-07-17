<template>
  <div>
    <div>x - {{ foo }} - {{ count }}</div>
    <button @click="add()">Click</button>
    <hr />
    {{ message }}
  </div>
</template>

<script>
import { value } from 'vue-function-api';

export default {
  setup() {
    const count = value(0);
    const message = value(this.foo);
    function add() {
      count.value++;
    }

    return {
      count,
      add,
      message
    };
  },
  asyncData() {
    return {
      foo: 'bar'
    };
  }
};
</script>
