<script setup lang="ts">
import { computed } from 'vue';
import { useStatisticStore } from '../stores/StatisticStore';

const store = useStatisticStore();

const bestAccuracy = computed(() => {
  let result: number = 0;
  store.statisticInfo.forEach(el => {
    if (result < el.accuracy) result = el.accuracy;
  });
  return result;
})

const bestSpeed = computed(() => {
  let result: number = 0;
  store.statisticInfo.forEach(el => {
    if (result < el.speed) result = el.speed;
  });
  return result;
})

const speedResultMessage = computed(() => {
  if (store.statisticInfo.length <= 1) {
    return 'Завершите несколько попыток, чтобы увидеть свой прогресс в скорости набора текста';
  }
  const firstTrySpeed = store.statisticInfo[0].speed;
  let result: string = `Ваш лучший результат: ${bestSpeed.value} зн./мин.`;
  if (store.statisticInfo.length > 1 && bestSpeed.value > firstTrySpeed) {
    result += ` Это на ${bestSpeed.value - firstTrySpeed} зн./мин. быстрее, в сравнении с первой попыткой`;
  } else {
    result = 'Потренеруйтесь ещё немного, чтобы скорость набора текста стала выше';
  }
  return result;
});

const accuracyResultMessage = computed(() => {
  if (store.statisticInfo.length <= 1) {
    return 'Завершите несколько попыток, чтобы увидеть свой прогресс в точности набора текста';
  }
  const firstTryAccuracy = store.statisticInfo[0].accuracy;
  let result: string = `Ваш лучший результат: ${bestAccuracy.value} %.`;
  if (store.statisticInfo.length > 1 && bestAccuracy.value > firstTryAccuracy) {
    result += ` Это на ${bestAccuracy.value - firstTryAccuracy} % точнее, в сравнении с первой попыткой`;
  } else {
    result = 'Потренеруйтесь ещё немного, чтобы улучшить точность набора';
  }
  return result;
});
</script>

<template>
  <div class="statistic-screen">
    <h1>Статистика ваших попыток</h1>
    <ul class="statistic-screen__records">
      <li v-for="record in store.statisticInfo" :key="record.id">
        <h2><strong>Попытка №{{ record.id }}</strong></h2>
        <p>Скорость набора текста: <strong>{{ record.speed }}</strong> зн./мин</p>
        <p>Точность набора текста: <strong>{{ record.accuracy }}</strong> %</p>
      </li>
    </ul>
    <div class="statistic-screen__best-results">
      <div class="best-results__result-card">
        <h3>Скорость набора</h3>
        <p>{{ speedResultMessage }}</p>
      </div>
      <div class="best-results__result-card">
        <h3>Точность набора</h3>
        <p>{{ accuracyResultMessage }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.statistic-screen {
  @apply flex flex-col justify-center gap-6 p-6 text-center bg-blue-300 rounded-2xl w-96;
}

.statistic-screen h1 {
  @apply text-2xl font-semibold;
}

.statistic-screen__records {
  @apply flex flex-col items-center gap-4;
}

.statistic-screen__records li {
  @apply w-full p-4 border border-solid border-blue-500 rounded-2xl;
}

.statistic-screen__best-results {
  @apply flex flex-col gap-4 text-left;
}

.best-results__result-card {
  @apply flex flex-col gap-2 w-full p-2 rounded-2xl bg-blue-400;
}

.best-results__result-card h3 {
  @apply text-xl font-medium;
}
</style>