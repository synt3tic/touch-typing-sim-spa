<script setup lang="ts">
import TextField from './TextField.vue';
import StatisticsIndicator from './StatisticsIndicator.vue';
import ToButton from './UI/ToButton.vue';

</script>

<template>
  <div class="train-screen">
    <text-field />
    <div class="train-screen__indicators">
      <statistics-indicator  indicatorName="Скорость" />
      <statistics-indicator  indicatorName="Точность" />
      <to-button class="indicators__button">Заново</to-button>
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