import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useDataStore = defineStore('data', () => {
  // State
  const data = ref<string>('');
  return { data };
});
