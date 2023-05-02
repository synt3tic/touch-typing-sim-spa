<script setup lang="ts">
import { useSessionStore } from '../stores/SessionStore';
import LetterWrapper from './LetterWrapper.vue';

const store = useSessionStore();
</script>

<template>
  <div class="text-field">
    <letter-wrapper 
      v-for="(letter, index) in store.lettersArray"
      :key="index"
      :letter="letter"
      :index="index"
      :correctClicks="store.correctClickCounter"
    />
  </div>
</template>

<style scoped>
.text-field {
  @apply flex flex-wrap w-224 p-3 whitespace-pre-wrap text-lg font-medium bg-white rounded-2xl;
}
</style>