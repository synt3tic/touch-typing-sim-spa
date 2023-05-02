<script setup lang="ts">
import LetterWrapper from './LetterWrapper.vue';

</script>

<template>
  <div class="text-field">
    <letter-wrapper letter="a" />
  </div>
</template>

<style scoped>
.text-field {
  @apply h-116 w-224 p-3 bg-white rounded-2xl;
}
</style>