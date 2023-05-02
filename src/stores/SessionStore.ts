import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSessionStore = defineStore('SessionStore', () => {
  const working = ref(false);

  return {
    working,
  };
});