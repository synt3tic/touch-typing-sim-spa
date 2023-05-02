<script setup lang="ts">
interface Props {
  indicatorName: string;
}

const props = defineProps<Props>();

</script>

<template>
  <div class="indicator">
    <h3 class="indicator__name">{{ props.indicatorName }}</h3>
    <p class="indicator__value"><strong>0</strong> зн./мин</p>
  </div>
</template>

<style scoped>
.indicator {
  @apply flex flex-col gap-4 justify-center w-48 h-28 p-4 border border-solid border-blue-500 rounded-2xl;
}

.indicator__name {
  @apply text-2xl;
}

.indicator__value {
  @apply text-xl;
}
</style>