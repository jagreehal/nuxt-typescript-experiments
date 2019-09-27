<template>
  <div>{{ message }} = {{ fullName }}</div>
</template>
<script lang="ts">
import {
  createComponent,
  computed,
  reactive,
  PropType
} from '@vue/composition-api';

interface User {
  firstName: string;
  lastName: string;
}

export default createComponent({
  props: {
    user: {
      type: Object as PropType<User>,
      required: true
    }
  } as const,

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
