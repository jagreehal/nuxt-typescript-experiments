<template>
  <div>{{ foo }} {{ message }}</div>
</template>
<script lang="ts">
import {
  createComponent,
  computed,
  reactive,
  PropType
} from '@vue/composition-api';

import TestComponent from '@/components/TestComponent.vue';

interface User {
  firstName: string;
  lastName: number;
}

export default createComponent({
  components: {
    TestComponent
  },
  props: {
    user: {
      type: Object as PropType<User>,
      required: true
    }
  } as const,

  asyncData() {
    console.log('async data');
    return {
      foo: 'bar'
    };
  },

  setup({ user }) {
    console.log('setup');
    const fullName = computed(() => `${user.firstName} ${user.lastName}`);
    const message = reactive('This is a message');

    return {
      fullName,
      message
    };
  }
});
</script>
