<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import ToModal from '../components/UI/ToModal.vue';
import ToButton from '../components/UI/ToButton.vue';
import ToRadioButton from './UI/ToRadioButton.vue';

const emit = defineEmits(['startTry']);

const startTyping = async () => {
  emit('startTry', selectedTextLength.value);
};

const selectedTextLength = ref('&number=7');

const selectTextLength = (e: Event) => {
  selectedTextLength.value = (e.target as HTMLInputElement).value;
};

const radioButtons = [
  {
    id: 1,
    name: 'Малый',
    value: '&number=1',
  },
  {
    id: 2,
    name: 'Средний',
    value: '&number=4',
  },
  {
    id: 3,
    name: 'Большой',
    value: '&number=7',
  },
];

</script>

<template>
  <to-modal>
    <template #header>Приготовьтесь к печати</template>
    <img class="icon" src="../assets/icons/keyboard.svg" alt="keyboard-icon">
    <div class="text-length-selection">
      <p>Выберите длину текста</p>
      <to-radio-button 
        v-for="item in radioButtons"
        :key="item.id"
        :value="item.value"
        :checked="item.id === 2"
        @change="selectTextLength"
      >
        {{ item.name }}
      </to-radio-button>
    </div>
    <to-button @click="startTyping">Начать печатать</to-button>
  </to-modal>
</template>

<style scoped>
.icon {
  @apply self-center w-64;
}

.text-length-selection {
  @apply flex flex-col items-start gap-2;
}

.text-length-selection p {
  @apply text-xl font-medium;
}
</style>