import { defineStore } from 'pinia';
import { Ref, ref } from 'vue';

export const useSessionStore = defineStore('SessionStore', () => {

  const lettersArray = ref<string[]>([]);
  const convertTextToArray = (text: string) => {
    lettersArray.value = text.split('');
  };

  const isTryActive = ref(false);
  const isResultScreenVisible = ref(false);

  const secondsCounter = ref(0);
  const totalClickCounter = ref(0);
  const correctClickCounter = ref(0);
  const wrongClick = ref(false);


  let interval: number | undefined;

  const resetValues = () => {
    lettersArray.value = [];
    isTryActive.value = false;
    secondsCounter.value = 0;
    totalClickCounter.value = 0;
    correctClickCounter.value = 0;
    wrongClick.value = false;
    clearInterval(interval);
  };

  const restartTry = () => {
    resetValues();
  }

  const startTry = () => {
    isTryActive.value = true;
    interval = setInterval(() => {
      secondsCounter.value += 1;
    }, 1000)
  };
  const stopTry = () => {
    clearInterval(interval);
    isResultScreenVisible.value = true;
  };

  const increaseCounter = (counter: Ref) => {
    counter.value += 1;
  };

  const increaseTotalClickCounter = () => {
    increaseCounter(totalClickCounter);
  };

  const increaseCorrectClickCounter = () => {
    increaseCounter(correctClickCounter);
    console.log(interval)
  };

  return {
    isTryActive,
    isResultScreenVisible,
    lettersArray,
    totalClickCounter,
    correctClickCounter,
    wrongClick,
    secondsCounter,
    convertTextToArray,
    startTry,
    stopTry,
    restartTry,
    increaseTotalClickCounter,
    increaseCorrectClickCounter,
  };
});