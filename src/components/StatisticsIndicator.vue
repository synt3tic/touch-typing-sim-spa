<script setup lang="ts">
import { computed } from 'vue';
import { useSessionStore } from '../stores/SessionStore';

interface Props {
  indicatorName: string;
}

const props = defineProps<Props>();
const store = useSessionStore();

const unitOfMeasure = computed(() => props.indicatorName === 'Скорость' ? 'зн./мин' : '%');

const indicatorsCalculation = computed(() => {
  let result;
  if(props.indicatorName === 'Точность') {
    store.totalClickCounter > 0 
    ? result = Math.round((store.correctClickCounter / store.totalClickCounter) * 100 )
    : result = 0;
  } else {
    store.totalClickCounter > 0
    ? result = Math.round((store.correctClickCounter / store.secondsCounter) * 60)
    : result = 0;
  };
  return result;
})

</script>

<template>
  <div class="indicator">
    <h3 class="indicator__name">{{ props.indicatorName }}</h3>
    <p class="indicator__value">
      <strong>{{ indicatorsCalculation }}</strong>
      {{ unitOfMeasure }}
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