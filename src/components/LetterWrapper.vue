<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  letter: string;
  index: number;
  correctClicks: number;
  wrongClick?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  wrongClick: false,
});

const classList = computed(() => {
  return {
    'letter-wrapper': true,
    'letter-wrapper_current': props.index === props.correctClicks && !props.wrongClick,
    'letter-wrapper_correct': props.index < props.correctClicks,
    'letter-wrapper_wrong': props.wrongClick && props.index === props.correctClicks,
  };
});
</script>

<template>
  <span :class="classList">{{ props.letter }}</span>
</template>

<style scoped>
.letter-wrapper {
  @apply tracking-wide rounded;
}

.letter-wrapper_wrong {
  @apply bg-red-500;
}

.letter-wrapper_correct {
  @apply text-green-600;
}

.letter-wrapper_current {
  @apply bg-green-400;
}
</style>