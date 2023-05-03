<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue';
import { useSessionStore } from '../stores/SessionStore';
import LetterWrapper from './LetterWrapper.vue';

const store = useSessionStore();

const input = ref<HTMLInputElement>();
const inputValue = ref('');

watchEffect(() => {
  if (!store.isTryActive) {
    inputValue.value = '';
  }
  if (store.isTryActive) {
    if (inputValue.value === store.lettersArray[store.correctClickCounter]) {
      store.increaseCorrectClickCounter();
      store.increaseTotalClickCounter();
      inputValue.value = '';
      if (store.correctClickCounter === store.lettersArray.length) {
        store.stopTry();
      }
    } else if (inputValue.value !== '') {
      store.increaseTotalClickCounter();
      store.wrongClick = true;
    } else {
      store.wrongClick = false;
    }
  }
})

onMounted(() => {
  input.value?.focus();
});
</script>

<template>
  <div class="text-field">
    <input 
      v-model="inputValue" 
      type="text" 
      ref="input"
      maxlength="1"
      class="w-0 h-0"
      @blur="input?.focus()"
    />
    <letter-wrapper
      v-for="(letter, index) in store.lettersArray"
      :key="index"
      :letter="letter"
      :index="index"
      :correct-clicks="store.correctClickCounter"
      :wrong-click="store.wrongClick"
    />
  </div>
</template>

<style scoped>
.text-field {
  @apply w-224 p-3 whitespace-pre-wrap text-lg font-medium bg-white rounded-2xl;
}
</style>