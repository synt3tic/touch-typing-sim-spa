import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSessionStore = defineStore('SessionStore', () => {
  const isLoading = ref(true);
  const text = ref<string | null>(null);

  const isTryActive = ref(false);

  const secondsCounter = ref(0);
  const totalClickCounter = ref(0);
  const correctClickCounter = ref(0);

  const startTry = () => {
    isTryActive.value = true;
  };
  const stopTry = () => {
    isTryActive.value = false;
  };
  const timer = () => {
    setInterval(() => {
      if (isTryActive) secondsCounter.value += 1
    }, 1000)
  };

  const increaseTotalClickCounter = () => {
    totalClickCounter.value += 1;
  };

  const increaseCorrectClickCounter = () => {
    correctClickCounter.value += 1;
  };

  return {
    isLoading,
    text,
    totalClickCounter,
    correctClickCounter,
    startTry,
    stopTry,
    timer,
    increaseTotalClickCounter,
    increaseCorrectClickCounter,
  };
});