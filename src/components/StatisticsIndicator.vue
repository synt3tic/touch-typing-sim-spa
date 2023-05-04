<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  indicatorName: string;
  correctClicks: number;
  totalClicks: number;
  seconds: number;
}

const props = defineProps<Props>();

const unitOfMeasure = () => props.indicatorName === 'Скорость' ? 'зн./мин' : '%';

const calculationValue = (value: number, multiplier: number) => {
  return Math.round((props.correctClicks / value) * multiplier);
};

const indicatorsCalculation = computed(() => {
  let result;
  if(props.indicatorName === 'Точность') {
    props.totalClicks > 0 ? result = calculationValue(props.totalClicks, 100) : result = 0;
  } else {
    props.totalClicks > 0 ? result = calculationValue(props.seconds, 60) : result = 0;
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