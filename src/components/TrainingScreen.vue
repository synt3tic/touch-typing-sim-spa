<script setup lang="ts">
import StartWindow from '../components/StartWindow.vue';
import ResultScreen from '../components/ResultScreen.vue';
import TextField from './TextField.vue';
import StatisticsIndicator from './StatisticsIndicator.vue';
import TextLoader from './TextLoader.vue';
import ToButton from './UI/ToButton.vue';
import { ref } from 'vue';
import { getText } from '../API/textAPI';
import { ApiResponse } from '../types/ResponseTypes';

const indicators = ['Скорость', 'Точность'];

const isLoading = ref(true);
const lettersArray = ref<string[]>([]);
const isTryActive = ref(false);
const isResultScreenVisible = ref(false);
const secondsCounter = ref(0);
const totalClickCounter = ref(0);
const correctClickCounter = ref(0);

let interval: number | undefined;

const startTry = async (textLenth: string) => {
  try {
    const respone: ApiResponse = await getText(textLenth);
    isLoading.value = false;
    lettersArray.value = respone.text.split('');
    isTryActive.value = true;
    interval = setInterval(() => {
      secondsCounter.value += 1;
    }, 1000)
  } catch (error) {
    console.log(error);
  }
};

const stopTry = () => {
  clearInterval(interval);
  isResultScreenVisible.value = true;
};

const resetValues = () => {
  lettersArray.value = [];
  isTryActive.value = false;
  secondsCounter.value = 0;
  totalClickCounter.value = 0;
  correctClickCounter.value = 0;
  isResultScreenVisible.value = false;
  clearInterval(interval);
};

const correctClick = () => {
  totalClickCounter.value += 1;
  correctClickCounter.value += 1;
};

const wrongClick = () => {
  totalClickCounter.value += 1;
};

</script>

<template>
  <start-window v-if="!isTryActive" @start-try="startTry" />
  <result-screen
    v-if="isResultScreenVisible" 
    :correctClicks="correctClickCounter"
    :totalClicks="totalClickCounter"
    :seconds="secondsCounter"
    @restartTry="resetValues"
  />
  <div class="train-screen">
    <text-field
      v-if="!isLoading"
      :isTryActive="isTryActive" 
      :lettersArray="lettersArray" 
      :correctClicks="correctClickCounter"
      @correctClick="correctClick"
      @wrongClick="wrongClick"
      @stopTry="stopTry"
    />
    <text-loader v-else />
    <div class="train-screen__indicators">
      <statistics-indicator
      v-for="(indicator, index) in indicators"
        :key="index"
        :indicatorName="indicator"
        :correctClicks="correctClickCounter"
        :totalClicks="totalClickCounter"
        :seconds="secondsCounter"
      />
      <to-button class="indicators__button" @click="resetValues">Заново</to-button>
    </div>
  </div>
</template>

<style scoped>
.train-screen {
  @apply flex gap-6 w-min p-6 bg-blue-300 rounded-2xl;
}

.train-screen__indicators {
  @apply flex flex-col gap-4 w-48 items-end;
}
</style>