<template>
  <div>
    <div>
      <h1>
        nuxt-function-api-example
      </h1>
      <h2>Count is {{ count }} and computed is {{ plusOne }}</h2>
      <div>
        <button @click="() => (count += 1)">Count</button>
      </div>
    </div>
  </div>
</template>

<script lang>
import { value, computed, watch, onMounted } from 'vue-function-api';

export default {
  components: {},
  asyncData() {
    return {};
  },
  setup() {
    // reactive state
    const count = value(0);
    // computed state
    const plusOne = computed(() => count.value + 1);
    // method
    const increment = () => {
      count.value++;
    };
    // watch
    watch(
      () => count.value * 2,
      val => {
        console.log(`count * 2 is ${val}`);
      }
    );
    // lifecycle
    onMounted(() => {
      console.log(`mounted`);
    });
    // expose bindings on render context
    return {
      count,
      plusOne,
      increment
    };
  }
};
</script>
