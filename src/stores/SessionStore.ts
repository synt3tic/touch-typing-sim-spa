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


  let interval: number | undefined;

  const startTry = () => {
    isTryActive.value = true;
    interval = setInterval(() => {
      secondsCounter.value += 1;
    }, 1000)
  };
  const stopTry = () => {
    isTryActive.value = false;
    clearInterval(interval);
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
    isTryActive,
    lettersArray,
    totalClickCounter,
    correctClickCounter,
    wrongClick,
    secondsCounter,
    convertTextToArray,
    startTry,
    stopTry,
    increaseTotalClickCounter,
    increaseCorrectClickCounter,
  };
});