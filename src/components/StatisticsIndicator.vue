<script setup lang="ts">
import { computed } from 'vue';
import { useSessionStore } from '../stores/SessionStore';

interface Props {
  indicatorName: string;
}

const props = defineProps<Props>();
const store = useSessionStore();

const unitOfMeasure = () => props.indicatorName === 'Скорость' ? 'зн./мин' : '%';

const calculationValue = (value: number, multiplier: number) => {
  return Math.round((store.correctClickCounter / value) * multiplier);
};

const indicatorsCalculation = computed(() => {
  const isCorrect = store.totalClickCounter > 0;
  let result;
  if(props.indicatorName === 'Точность') {
    isCorrect ? result = calculationValue(store.totalClickCounter, 100) : result = 0;
  } else {
    isCorrect ? result = calculationValue(store.secondsCounter, 60) : result = 0;
  };
  return result;
})

</script>

<template>
  <div class="indicator">
    <h3 class="indicator__name">{{ props.indicatorName }}</h3>
    <p class="indicator__value">
      <strong>{{ indicatorsCalculation }}</strong>
      {{ unitOfMeasure() }}
    </p>
  </div>
</template>

<style scoped>
.indicator {
  @apply flex flex-col gap-4 justify-center w-full h-28 p-4 border border-solid border-blue-500 rounded-2xl;
}

.indicator__name {
  @apply text-2xl;
}

.indicator__value {
  @apply text-xl;
}
</style>