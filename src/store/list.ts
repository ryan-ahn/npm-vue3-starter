import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useDataStore = defineStore('data', () => {
  // State
  const data = ref<string>('');
  // Set State
  const setDate = (payload: string) => {
    data.value = payload;
  };
  return {
    data,
    setDate,
  };
});
