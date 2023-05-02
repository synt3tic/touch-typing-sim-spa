<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  letter: string;
  wrongPress?: boolean;
  correctPress?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  wrongPress: false,
  correctPress: true,
});

const classList = computed(() => {
  return {
    'letter-wrapper': true,
    'letter-wrapper_wrong': props.wrongPress,
    'letter-wrapper_correct': props.correctPress,
  };
});
</script>

<template>
  <div :class="classList">
    <p>{{ props.letter }}</p>
  </div>
</template>

<style scoped>
.letter-wrapper {
  @apply text-center p-2 w-8 bg-blue-100 rounded-xl;
}

.letter-wrapper_wrong {
  @apply bg-red-500;
}

.letter-wrapper_correct {
  @apply bg-green-300;
}
</style>