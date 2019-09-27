<template>
  <div>
    <div>
      <h1>nuxt-function-api-example</h1>
      <component-with-prop :user="user" />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import ComponentWithProp from '@/components/ComponentWithProp.vue';
export default Vue.extend({
  components: {
    ComponentWithProp
  },
  data() {
    return {
      user: {
        firstName: 'x',
        lastName: 1
      }
    };
  }
});
</script>
