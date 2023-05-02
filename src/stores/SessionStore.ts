import { defineStore } from 'pinia';
import { Ref, ref } from 'vue';

export const useSessionStore = defineStore('SessionStore', () => {
  const isLoading = ref(true);

  const lettersArray = ref<string[]>([]);
  const convertTextToArray = (text: string) => {
    lettersArray.value = text.split('');
  };

  const isTryActive = ref(false);

  const secondsCounter = ref(0);
  const totalClickCounter = ref(0);
  const correctClickCounter = ref(0);
  const wrongClick = ref(false);

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

  const increaseCounter = (counter: Ref) => {
    counter.value += 1;
  };

  const increaseTotalClickCounter = () => {
    increaseCounter(totalClickCounter);
  };

  const increaseCorrectClickCounter = () => {
    increaseCounter(correctClickCounter);
  };

  return {
    isLoading,
    lettersArray,
    totalClickCounter,
    correctClickCounter,
    wrongClick,
    convertTextToArray,
    startTry,
    stopTry,
    timer,
    increaseTotalClickCounter,
    increaseCorrectClickCounter,
  };
});