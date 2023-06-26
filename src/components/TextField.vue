<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue';
import LetterWrapper from './LetterWrapper.vue';

interface Props {
  isTryActive: boolean;
  lettersArray: string[];
  correctClicks: number;
}

const props = defineProps<Props>();
const emit = defineEmits(['correctClick', 'wrongClick', 'stopTry']);

const input = ref<HTMLInputElement>();
const inputValue = ref('');
const wrongClick = ref(false);

watchEffect(() => {
  if (props.correctClicks === props.lettersArray.length && props.lettersArray.length !== 0) {
      emit('stopTry');
    }
  if (!props.isTryActive) {
    inputValue.value = '';
  } else {
    if (inputValue.value === props.lettersArray[props.correctClicks]) {
      emit('correctClick');
      inputValue.value = '';
    } else if (inputValue.value !== '') {
      emit('wrongClick');
      wrongClick.value = true;
    } else {
      wrongClick.value = false;
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
      v-for="(letter, index) in props.lettersArray"
      :key="index"
      :letter="letter"
      :index="index"
      :correct-clicks="props.correctClicks"
      :wrong-click="wrongClick"
    />
  </div>
</template>

<style scoped>
.text-field {
  @apply w-224 p-3 whitespace-pre-wrap text-2xl bg-white rounded-2xl;
}
</style>