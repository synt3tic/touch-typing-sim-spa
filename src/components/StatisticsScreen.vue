<script setup lang="ts">
import { useStatisticStore } from '../stores/StatisticStore';

const store = useStatisticStore();

const bestScore = (value: string) => {
  let result: number = 0;
  store.statisticInfo.forEach(el => {
    if (result < el[value]) result = el[value];
  });
  return result;
};

const speedResultMessage = () => {
  let result: string;
  const bestSpeed = bestScore('speed');

  if (store.statisticInfo.length < 2) {
    result = 'Завершите несколько попыток, чтобы увидеть свой прогресс в скорости набора текста';
  } else {
    result = `Ваш лучший результат: ${bestSpeed} зн./мин.`;
  }
  return result;
};

const accuracyResultMessage = () => {
  let result: string;
  const bestAccuracy = bestScore('accuracy');

  if (store.statisticInfo.length < 2) {
    result = 'Завершите несколько попыток, чтобы увидеть свой прогресс в точности набора текста';
  } else {
    result = `Ваш лучший результат: ${bestAccuracy} %.`;
  }  
  return result;
};
</script>

<template>
  <div class="statistic-screen">
    <h1>Статистика ваших попыток</h1>
    <ul v-if="store.statisticInfo.length > 0" class="statistic-screen__records">
      <li v-for="record in store.statisticInfo" :key="record.id">
        <h2><strong>Попытка №{{ record.id }}</strong></h2>
        <p>Скорость набора текста: <strong>{{ record.speed }}</strong> зн./мин</p>
        <p>Точность набора текста: <strong>{{ record.accuracy }}</strong> %</p>
      </li>
    </ul>
    <p v-else>Пока что вы не завершили ни одной попытки</p>
    <div class="statistic-screen__best-results">
      <div class="best-results__result-card">
        <img src="../assets/icons/speed.svg" alt="speed-icon" />
        <h3>Скорость набора</h3>
        <p>{{ speedResultMessage() }}</p>
      </div>
      <div class="best-results__result-card">
        <img src="../assets/icons/accuracy.svg" alt="accuracy-icon" />
        <h3>Точность набора</h3>
        <p>{{ accuracyResultMessage() }}</p>
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
  @apply flex flex-col items-center gap-2 w-full p-2 rounded-2xl bg-blue-400;
}

.best-results__result-card h3 {
  @apply text-xl font-medium;
}
</style>