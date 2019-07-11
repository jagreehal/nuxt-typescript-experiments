import { value, computed } from 'vue-function-api';

export const useMessage = () => {
  const message = value('');
  const hasMessage = computed(() => message.value.length > 0);
  return {
    message,
    hasMessage
  };
};
