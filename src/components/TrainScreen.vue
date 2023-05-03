<script setup lang="ts">
import StartWindow from '../components/StartWindow.vue';
import ResultScreen from '../components/ResultScreen.vue';
import TextField from './TextField.vue';
import StatisticsIndicator from './StatisticsIndicator.vue';
import ToButton from './UI/ToButton.vue';
import { useSessionStore } from '../stores/SessionStore';
import { onUnmounted } from 'vue';

const store = useSessionStore();

onUnmounted(() => {
  store.resetValues();
});

</script>

<template>
  <start-window v-if="!store.isTryActive" />
  <result-screen v-if="store.isResultScreenVisible" />
  <div class="train-screen">
    <text-field />
    <div class="train-screen__indicators">
      <statistics-indicator  indicatorName="Скорость" />
      <statistics-indicator  indicatorName="Точность" />
      <to-button class="indicators__button" @click="store.restartTry">Заново</to-button>
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